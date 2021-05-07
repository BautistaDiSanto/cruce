// import { GetProducts, DeleteProduct } from "../API/index";
// import { AiFillDelete, AiFillEdit } from "react-icons/ai";

// export const SuperUser = () => {
//   const { data, status } = GetProducts();
//   console.log(data);
//   if (status === "loading")
//     return (
//       <Flex h="100vh" w="100%" justify="center" align="center">
//         <Spinner size="xl" />
//       </Flex>
//     );
//   else
//     return (
//       <Flex direction="column" h="fit-content" align="center">
//         {data.map((product) => (
//           <Flex
//             key={product.id}
//             h="11.5rem"
//             w="95%"
//             align="center"
//             justify="space-evenly"
//             borderBottom="1px solid lightgray"
//           >
//             <Image src="src=../../../toy.svg" h="80%" w="auto" />
//             <Flex
//               direction="column"
//               justify="space-evenly"
//               align="flex-start"
//               w="40%"
//               h="90%"
//             >
//               <p>{product.name}</p>
//               <p>{product.price}</p>
//             </Flex>
//             <Flex
//               direction="column"
//               justify="space-evenly"
//               align="center"
//               h="80%"
//               w="20%"
//               borderLeft="1px solid lightgray"
//             >
//               <IconButton icon={<AiFillDelete />} />
//               <IconButton icon={<AiFillEdit />} />
//             </Flex>
//           </Flex>
//         ))}
//       </Flex>
//     );
// };
