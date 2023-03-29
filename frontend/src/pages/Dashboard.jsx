import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import "./Dashboard.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import Addbug from "../components/Addbug";
import { DeleteIcon } from "@chakra-ui/icons";
import { addnewBug, deleteBug } from "../store/Appreducer/action";
import Navbar from "../components/Navbar";
const Dashboard = () => {
  const bugdata = useSelector((store) => store.appReducer);
  const dispatch = useDispatch();
  //console.log(bugdata);

  const handleDelete = (data, id) => {
    let newdata = data.bugs.filter((el) => el.id !== id);
    let updatedbugdata = { ...data, bugs: newdata };
    //console.log(data, newdata, updatedbugdata);
    dispatch(deleteBug(updatedbugdata));
  };
  const handleDragEnd = ({ destination, source, draggableId }) => {
    //console.log(destination, source, draggableId,'ppoiuiuyu');
    if (!destination) {
      return;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    let temp = bugdata[source.droppableId].bugs.filter(
      (el) => el.id === draggableId
    );

    let newdata = bugdata[source.droppableId].bugs.filter(
      (el) => el.id !== draggableId
    );
    let updatedbugdata = { ...bugdata[source.droppableId], bugs: newdata };
    console.log(newdata, "new", temp);
    console.log(updatedbugdata, "pdet");
    console.log(source, "sourcwe", draggableId, destination.droppableId);
    dispatch(deleteBug(updatedbugdata));
    let changedata = { ...temp[0], category: destination.droppableId };
    dispatch(addnewBug(changedata));
    console.log(changedata);
  };
  return (
    <>
      <Navbar />
      <Box width={"95%"} margin={"auto"} marginTop={"1rem"} className="add_btn">
        <Addbug />
      </Box>
      <Box className="main">
        <DragDropContext onDragEnd={handleDragEnd}>
          {Object.keys(bugdata).map((type) => {
            return (
              <Box key={type} className={"bugtype"}>
                <Heading
                  className="heading"
                  as="h4"
                  size="md"
                  marginBottom={"3rem"}
                  bg={bugdata[type].color}
                >
                  {bugdata[type].title}
                </Heading>

                <Droppable droppableId={type}>
                  {(provided, snapshot) => {
                    return (
                      <Box ref={provided.innerRef} {...provided.droppableProps}>
                        {bugdata[type].bugs.map((el, index) => {
                          return (
                            <Draggable
                              key={el.id}
                              index={index}
                              draggableId={el.id}
                            >
                              {(provided, snapshot) => {
                                //console.log(snapshot);
                                return (
                                  <Box
                                    bg={bugdata[type].color}
                                    display={"flex"}
                                    justifyContent={"space-between"}
                                    color={"white"}
                                    padding={"8px"}
                                    boxShadow={
                                      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
                                    }
                                    marginBottom={"11px"}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    {el.title}

                                    <DeleteIcon
                                      onClick={() =>
                                        handleDelete(bugdata[type], el.id)
                                      }
                                      boxSize={5}
                                    />
                                  </Box>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </Box>
                    );
                  }}
                </Droppable>
              </Box>
            );
          })}
        </DragDropContext>
      </Box>
    </>
  );
};

export default Dashboard;
