export type PreviousPage = {
  name: string;
  to: string;
}

export type NavSectionProps = {
  previousPages: PreviousPage[];
  actualPage: string;
};