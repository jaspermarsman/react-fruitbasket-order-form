function Fruit ({fruitName, amount, setAmount}) {

    function changeAmount(number) {
        setAmount(number + amount)
    }



    return (
        <>
        <fieldset className={"fruits"}>
            <h1>{fruitName}</h1>
            <button
                onClick={() => changeAmount(-1)}
            >
                -</button>
            <p> {amount} </p>
            <button
                onClick={() => changeAmount(1)}
            >+</button>

        </fieldset>

    </>
    );
}

export default Fruit;