import { useState } from "react";

function State() {
    const [count, setCount] = useState(0);

    return (
        <section className="container mt-5 text-center">

            <h2>React State Demonstration</h2>

            <p className="mt-4">
                Count: {count}
            </p>

            <button
                className="btn btn-primary me-2"
                onClick={() => setCount(count + 1)}
            >
                Increase
            </button>

            <button
                className="btn btn-danger"
                onClick={() => setCount(count - 1)}
            >
                Decrease
            </button>

        </section>
    );
}

export default State;