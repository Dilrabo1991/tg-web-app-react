import React, { useCallback, useEffect, useState } from "react";
import "./Form.css";
import { useTelegram } from "../Hooks/useTelegram";

function Form() {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subgact, setSubgact] = useState("physical");
  const { tg } = useTelegram();

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeSubgact = (e) => {
    setSubgact(e.target.value);
  };

  const onSendData = useCallback(() => {
    const data = {
      country,
      street,
      subgact,
    };
    tg.sendData(JSON.stringify(data));
  }, [country, street, subgact]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

  // Set MainButton text
  useEffect(() => {
    tg.MainButton.setParams({
      text: "Malumotlarni Yuborish",
    });
  }, [tg]);

  // Show/hide MainButton based on input validity
  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street, tg]);

  return (
    <div className="form">
      <h3>Malumotlaringizni kirgizing</h3>
      <div>
        <input
          type="text"
          className="input"
          placeholder="Shahar"
          value={country}
          onChange={onChangeCountry}
        />
        <input
          type="text"
          className="input"
          placeholder="Ko'cha"
          value={street}
          onChange={onChangeStreet}
        />

        <select className="select" value={subgact} onChange={onChangeSubgact}>
          <option value="physical">Jismoniy Shahs</option>
          <option value="legal">Yuridik Shahs</option>
        </select>
      </div>
    </div>
  );
}

export default Form;
