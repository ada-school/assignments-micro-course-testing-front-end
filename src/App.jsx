import { Box } from "@chakra-ui/react";
import TodoListPage from "./pages/TodoListPage";

function App() {
  return (
    <>
      <Box
        w="100vw"
        h="100vh"
        bgColor="#171923"
        px={[10, 10, 20, 40, 500]}
        pt={10}
      >
        <TodoListPage />
      </Box>
    </>
  );
}

export default App;
