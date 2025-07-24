export default function Sidebar() {
    return (
        <aside className="w-64 bg-white shadow-md p-4 border-r">
            <div className="w-full bg-teal-600 text-white py-2 rounded mb-4 text-center text-md">
                <button>+ New Chat</button>
            </div>
            <input type="text" placeholder="Search conversations..." className="w-full px-3 py-2 mb-4 border-2 rounded text-centre text-sm bg-white text-gray-500"/>
            
            <div>
                <p className="text-xs font-semibold text-gray-500 mb-2 mt-2">PINNED</p>
                <p className="text-gray-700 cursor-pointer text-[15px]">AdventureWorks Disc...</p>
                <p className="text-sm text-teal-700 cursor-pointer hover:underline text-center py-5 mt-2">Show More</p>
            </div>
        </aside>
    )
}