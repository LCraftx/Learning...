import { useState } from "react"
import Compo1 from "./components/Compo1.jsx"
import Compo2 from "./components/Compo2.jsx"
/*Practicando React y TailwindCSS*/
function App() {
    const components = [
        { key: "compo1", label: "1", Component: Compo1 },
        { key: "compo2", label: "2", Component: Compo2 },
    ];

    const [active, setActive] = useState(0);
    const ActiveComponent = components[active].Component;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="w-full flex justify-center items-center">
                <ActiveComponent />
            </div>

            {/*Un simple switch para ver cada proyecto*/}
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
                <div className="bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full px-2 py-1 flex gap-2 items-center shadow-lg">
                    {components.map((c, i) => (
                        <button
                            key={c.key}
                            onClick={() => setActive(i)}
                            className={`text-xs px-3 py-1 rounded-full transition-colors duration-150 ${
                                i === active ? "bg-blue-600 text-white" : "bg-transparent text-gray-700"
                            }`}
                            aria-pressed={i === active}
                            aria-label={`Mostrar ${c.label}`}
                        >
                            {c.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default App
