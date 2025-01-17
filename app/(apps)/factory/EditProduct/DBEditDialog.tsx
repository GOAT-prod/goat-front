// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/ui/dialog";
// import { cn } from "@/utils/helpers/cn";
// import { Button } from "@/ui/button";
// import { useState } from "react";
// import { UpdateProductForm } from "./DBEditProductForm";
// import { Pencil } from "lucide-react";
// import { ProductDB } from "../../../(services)/types/types";

// export const DBEditDialog = ({ item }: { item: ProductDB }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className={cn("")}>
//       <Dialog open={isOpen} onOpenChange={setIsOpen}>
//         <DialogTrigger className="bg-blue-200 border-blue-500 border-2 h-8 w-8 rounded-md hover:bg-blue-100 flex items-center justify-center">
//           <Pencil />
//         </DialogTrigger>
//         <DialogContent className="bg-white p-0 min-w-[1300px]">
//           <DialogHeader className="px-6 pt-6 ">
//             <DialogTitle>Редактирование товара</DialogTitle>
//             <DialogDescription className="text-base">
//               Введите нужные параметры товара в форму редактирования
//             </DialogDescription>
//           </DialogHeader>
//           <UpdateProductForm product={item} onClose={handleClose} />
//           <DialogFooter className="bg-background p-6 rounded-b-lg border-t border-border max-w-[1298px]">
//             <DialogClose asChild>
//               <Button type="button" variant="secondary">
//                 Отмена
//               </Button>
//             </DialogClose>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };
