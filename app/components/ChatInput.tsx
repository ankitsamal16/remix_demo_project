export default function ChatInput() {
  return (
    <div className="absolute bottom-0 w-5/6 flex justify-center py-4 bg-white border-t">
      <div className="flex items-center w-[90%] max-w-4xl border border-gray-400 rounded-l-md px-4 py-2 shadow-sm bg-white">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-2 py-1 outline-none bg-white"
        />
        <span className="text-sm text-gray-600 pr-4">0/4000</span>
        <button className="p-2 text-gray-500 hover:text-teal-600">
          <i className="ri-attachment-2"></i>
        </button>
      </div>
      <div className="text-2xl">
        <button className="text-white bg-teal-600 p-3 rounded-r-md hover:bg-teal-700">
          <i className="ri-telegram-2-line text-xl"></i>
        </button>
      </div>
    </div>
  );
}


// export default function ChatInput() {
//     return (
//         <div className="absolute bottom-0 w-5/6 flex justify-center py-4 bg-white border-t">
//           <div className="flex items-center w-[90%] max-w-4xl border-2 border-gray-400 rounded-md px-4 py-2 shadow-sm">
//             <input type="text" placeholder="Type your message..." className="bg-white flex-1 px-2 py-1 outline-none" />
//             <span className="text-sm pr-4 text-gray-600">0/4000</span>
//           </div>
//             <button className="text-white hover:bg-teal-800 text-xl bg-teal-600">
//               <i className="ri-telegram-2-line"></i>
//             </button>
//         </div>
//     )
// }