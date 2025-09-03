type S = {
  kind: 'square';
  x: number;
  y: number;
};

type C = {
  kind: 'circle';
  radius: number;
};

type MyEvents<Events extends { kind: string }> = {
  [E in Events as E['kind']]: (event: E) => void;
};

type config = MyEvents<S | C>;
