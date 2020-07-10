import React, { FC } from "react";

export interface FilterTagContainerProps {
  filter: Filter[];
}

export const FilterTagContainer: FC<FilterTagContainerProps> = ({ filter }) => {
  // ...
  // TODO: This will eventually render `FilterTag`'s
  return <></>;
};

export interface FilterTagProps {
  filter: Filter;
}

export interface Filter {
  field: string;
  operator: string; // TODO: we want a finite list of operators here
  operand: string | number;
}

export const FilterTag: FC<FilterTagProps> = ({ filter }) => {
  const { field, operator, operand } = filter;
  // TODO: make these look like pills or rectangles or whatever we want them to
  // look like
  return <>{`${field} ${operator} ${operand}`}</>;
};
