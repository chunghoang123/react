import React from "react";

interface Props {
  name: string;
}

const Children_Comp: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <h1>Họ và tên bên component con : {name}</h1>
    </div>
  );
};

export default Children_Comp;
