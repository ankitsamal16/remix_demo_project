export default function ChatMain() {
  const questions = [
    "Can you provide me a list of tables related to product",
    "Can you give me a visualization for the tables related to product",
    "Can you suggest some data quality rules for Sales table",
    "What is the total amount of sales",
  ];

    return (
        <div className="text-center">
          <div className="text-3xl font-semibold mb-6">
            How can I help today?
          </div>
          <div className="space-y-4">
            {questions.map((q, i) => (
              <div key={i} className="border border-gray-300 px-6 py-2 text-left hover:bg-gray-200 cursor-pointer">
                {q}
              </div>
            ))}
          </div>
        </div>
    )
}