function Fruit ({fruitName, amount, setAmount}) {

    function changeAmount(number) {
        setAmount(number + amount)
    }



    return (
        <>
        <fieldset className={"fruits"}>
            <h1 className={ amount < 5 ? "bad-sales" : "good-sales"}
            >{fruitName}</h1>
            <button
                disabled={amount < 1}
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