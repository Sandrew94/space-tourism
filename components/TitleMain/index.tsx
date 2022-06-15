import React from "react";
import { NumberPageStyle, TitleContainer, TitleStyle } from "./TitleMain.style";

type Props = {
  title: string;
};

export default function TitleMain({ title }: Props) {
  const titleArr = title.split(" ");
  const finalMessage = titleArr.splice(1, titleArr.length - 1).join(" ");
  const numberPage = titleArr[0];

  return (
    <TitleContainer>
      <NumberPageStyle>{numberPage}</NumberPageStyle>
      <TitleStyle>{finalMessage}</TitleStyle>
    </TitleContainer>
  );
}
