export interface SearchParamType {
  From: string;
  To: string;
  Sort: string | undefined;
}
export interface TrainsResultType {
  name: string;
  route: [];
  time: string;
  dist: [];
  distance: number;
  price: number;
}

export const result = async ({ From, To, Sort }: SearchParamType) => {
  const response = await fetch("http://localhost:4000/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ From: From, To: To, Sort: Sort }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  return response;
};
