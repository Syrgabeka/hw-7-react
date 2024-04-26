import { useState } from "react";
import { Button } from "../UI/Button";
import { ExpenseFilter } from "../select/select";

export const Form = () => {
  const [variant, setVariant] = useState("outlined");

  const variantHandle = () => {
    setVariant(event.target.value);
  };
  console.log(variant);

  return (
    <div>
      <ExpenseFilter value={variant} onChange={variantHandle} />

      <Button variant={variant}>button</Button>
    </div>
  );
};
