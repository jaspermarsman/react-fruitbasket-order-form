import React from 'react';
import './App.css';
import { useState } from "react";
import Fruit from "./Fruit";
import { useForm } from "react-hook-form";

function App() {

  const [strawberryValue, setStrawberryValue] = useState(0);
  const [bananaValue, setBananaValue] = useState(0);
  const [appleValue, setAppleValue] = useState(0);
  const [kiwiValue, setKiwiValue] = useState(0);

  function resetButton(){
      setStrawberryValue(0);
      setBananaValue(0);
      setAppleValue(0);
      setKiwiValue(0);
  }

  const { handleSubmit, formState: { errors }, register, watch } = useForm({
      mode: "onChange",
  });
  const otherFrequency = watch("orderFrequency");

  function onFormSubmit(data) {
      console.log("Deze gegevens heb je ingevoerd: ", data);
    }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
      <Fruit
      fruitName={"🍓 Aardbeien"}
      amount={strawberryValue}
      setAmount={setStrawberryValue}
      >
      </Fruit>
      <Fruit
          fruitName={"🍌 Bananen"}
          amount={bananaValue}
          setAmount={setBananaValue}
      >
      </Fruit>
      <Fruit
          fruitName={"🍎 Appels"}
          amount={appleValue}
          setAmount={setAppleValue}
      >
      </Fruit>
      <Fruit
          fruitName={"🥝 Kiwi"}
          amount={kiwiValue}
          setAmount={setKiwiValue}
      >
      </Fruit>
      <button
      onClick={() => resetButton()}
      >Reset
      </button>


      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label
            htmlFor={"firstname"}
        >Voornaam
          <input
            id={"firstname"}
            type={"text"}
            {...register("firstname",
                { required: {
                    value: true,
                        message: "Dit is een verplicht veld",
                    },
                })}
          />
            {errors.firstname && <p>{errors.firstname.message}</p>}
        </label>


        <label
            htmlFor={"lastname"}>Achternaam
          <input
            id={"lastname"}
            type={"text"}
            {...register("lastname",
                {required: { value: true,
                        message: "Dit is een verplicht veld",
                    },
                })}
          />
            {errors.lastname && <p>{errors.lastname.message}</p>}
        </label>
        <label
            htmlFor={"age"}
        >Leeftijd
          <input
            id={"age"}
            type={"number"}
            {...register("age",
                {
                    required: {
                        value: true,
                        message: "Dit is een verplicht veld",
                    },
                    min: {
                        value: 18,
                        message: "Je moet minimaal 18 zijn",
                    },
                    })}
          />
            {errors.age && <p>{errors.age.message}</p>}
        </label>
        <label htmlFor={"zipcode"}>Postcode
          <input
            id={"zipcode"}
            type={"text"}
            {...register(
                "zipcode",
                {required: true,
                    pattern: {value:  /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/im,
                        message: "ongeldige postcode"}})}
          >
          </input>
            {errors.zipcode && <p>{errors.zipcode.message}</p>}
        </label>
        <label
            htmlFor={"houseNumber"}>Huisnummer zonder toevoeging
          <input
              id={"houseNumber"}
              type={"number"}
              {...register(
                  "housenumber",
                  {required: true},
              )}
          >
          </input>
        </label>
          <label htmlFor={"orderFrequency"}>Bezorgfrequentie
          <input
              id={"weekly"}
              type={"radio"}
              value={"wekelijks"}
              {...register("orderFrequency", {required: true})}
          />wekelijks
          <input
              id={"otherWeek"}
              type={"radio"}
              value={"om de week"}
              {...register("orderFrequency", {required: true})}
          />om de week
          <input
              id={"monthly"}
              type={"radio"}
              value={"iedere maand"}
              {...register("orderFrequency", {required: true})}
          />iedere maand
          <input
              id={"other"}
              type={"radio"}
              value={"anders"}
              {...register("orderFrequency", {required: true})}
          />anders
          </label>
          {otherFrequency === "anders" && (
              <input
                  type={"text"}
                  {...register("custom-freqeuncy", { required: true})}
                  />
          )}
          <label
              htmlFor={"remarks"}
          >Opmerkingen
              <textarea
                  id={"remarks"}
                  cols="30"
                  rows="10"
                  {...register("remarks")}
              >
              </textarea>

          </label>
          <label htmlFor={"agreement"}>Ik ga akkoord met de voorwaarden
              <input
                  id={"agreement"}
                  {...register("agreement")}
                  type={"checkbox"}
              >
              </input>

          </label>

        <button
            type={"submit"}
            disabled={ errors.firstname || errors.lastname || errors.age}
        >Verzenden</button>
      </form>
</>

  );
}

export default App;
