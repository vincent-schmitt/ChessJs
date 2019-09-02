export const boardAtStart = {
  A: {
    "1": { figure: { type: "R", side: 0, field: "A1", moves: [] }, color: 0 },
    "2": { figure: { type: "P", side: 0, field: "A2", moves: [] }, color: 1 },
    "3": { figure: null, color: 0 },
    "4": { figure: null, color: 1 },
    "5": { figure: null, color: 0 },
    "6": { figure: null, color: 1 },
    "7": { figure: { type: "P", side: 1, field: "A7", moves: [] }, color: 0 },
    "8": { figure: { type: "R", side: 1, field: "A8", moves: [] }, color: 1 }
  },
  B: {
    "1": { figure: { type: "N", side: 0, field: "B1", moves: [] }, color: 1 },
    "2": { figure: { type: "P", side: 0, field: "B2", moves: [] }, color: 0 },
    "3": { figure: null, color: 1 },
    "4": { figure: null, color: 0 },
    "5": { figure: null, color: 1 },
    "6": { figure: null, color: 0 },
    "7": { figure: { type: "P", side: 1, field: "B7", moves: [] }, color: 1 },
    "8": { figure: { type: "N", side: 1, field: "B8", moves: [] }, color: 0 }
  },
  C: {
    "1": { figure: { type: "B", side: 0, field: "C1", moves: [] }, color: 0 },
    "2": { figure: { type: "P", side: 0, field: "C2", moves: [] }, color: 1 },
    "3": { figure: null, color: 0 },
    "4": { figure: null, color: 1 },
    "5": { figure: null, color: 0 },
    "6": { figure: null, color: 1 },
    "7": { figure: { type: "P", side: 1, field: "C7", moves: [] }, color: 0 },
    "8": { figure: { type: "B", side: 1, field: "C8", moves: [] }, color: 1 }
  },
  D: {
    "1": { figure: { type: "Q", side: 0, field: "D1", moves: [] }, color: 1 },
    "2": { figure: { type: "P", side: 0, field: "D2", moves: [] }, color: 0 },
    "3": { figure: null, color: 1 },
    "4": { figure: null, color: 0 },
    "5": { figure: null, color: 1 },
    "6": { figure: null, color: 0 },
    "7": { figure: { type: "P", side: 1, field: "D7", moves: [] }, color: 1 },
    "8": { figure: { type: "Q", side: 1, field: "D8", moves: [] }, color: 0 }
  },
  E: {
    "1": { figure: { type: "K", side: 0, field: "E1", moves: [] }, color: 0 },
    "2": { figure: { type: "P", side: 0, field: "E2", moves: [] }, color: 1 },
    "3": { figure: null, color: 0 },
    "4": { figure: null, color: 1 },
    "5": { figure: null, color: 0 },
    "6": { figure: null, color: 1 },
    "7": { figure: { type: "P", side: 1, field: "E7", moves: [] }, color: 0 },
    "8": { figure: { type: "K", side: 1, field: "E8", moves: [] }, color: 1 }
  },
  F: {
    "1": { figure: { type: "B", side: 0, field: "F1", moves: [] }, color: 1 },
    "2": { figure: { type: "P", side: 0, field: "F2", moves: [] }, color: 0 },
    "3": { figure: null, color: 1 },
    "4": { figure: null, color: 0 },
    "5": { figure: null, color: 1 },
    "6": { figure: null, color: 0 },
    "7": { figure: { type: "P", side: 1, field: "F7", moves: [] }, color: 1 },
    "8": { figure: { type: "B", side: 1, field: "F8", moves: [] }, color: 0 }
  },
  G: {
    "1": { figure: { type: "N", side: 0, field: "G1", moves: [] }, color: 0 },
    "2": { figure: { type: "P", side: 0, field: "G2", moves: [] }, color: 1 },
    "3": { figure: null, color: 0 },
    "4": { figure: null, color: 1 },
    "5": { figure: null, color: 0 },
    "6": { figure: null, color: 1 },
    "7": { figure: { type: "P", side: 1, field: "G7", moves: [] }, color: 0 },
    "8": { figure: { type: "N", side: 1, field: "G8", moves: [] }, color: 1 }
  },
  H: {
    "1": { figure: { type: "R", side: 0, field: "H1", moves: [] }, color: 1 },
    "2": { figure: { type: "P", side: 0, field: "H2", moves: [] }, color: 0 },
    "3": { figure: null, color: 1 },
    "4": { figure: null, color: 0 },
    "5": { figure: null, color: 1 },
    "6": { figure: null, color: 0 },
    "7": { figure: { type: "P", side: 1, field: "H7", moves: [] }, color: 1 },
    "8": { figure: { type: "R", side: 1, field: "H8", moves: [] }, color: 0 }
  }
};

export const figuresAtStart = {
  white: {
    R1: { type: "R", side: 0, field: "A1", moves: [] },
    N1: { type: "N", side: 0, field: "B1", moves: [] },
    B1: { type: "B", side: 0, field: "C1", moves: [] },
    Q: { type: "Q", side: 0, field: "D1", moves: [] },
    K: { type: "K", side: 0, field: "E1", moves: [] },
    B2: { type: "B", side: 0, field: "F1", moves: [] },
    N2: { type: "N", side: 0, field: "G1", moves: [] },
    R2: { type: "R", side: 0, field: "H1", moves: [] },
    P1: { type: "P", side: 0, field: "A2", moves: [] },
    P2: { type: "P", side: 0, field: "B2", moves: [] },
    P3: { type: "P", side: 0, field: "C2", moves: [] },
    P4: { type: "P", side: 0, field: "D2", moves: [] },
    P5: { type: "P", side: 0, field: "E2", moves: [] },
    P6: { type: "P", side: 0, field: "F2", moves: [] },
    P7: { type: "P", side: 0, field: "G2", moves: [] },
    P8: { type: "P", side: 0, field: "H2", moves: [] }
  },
  black: {
    R1: { type: "R", side: 1, field: "A8", moves: [] },
    N1: { type: "N", side: 1, field: "B8", moves: [] },
    B1: { type: "B", side: 1, field: "C8", moves: [] },
    Q: { type: "Q", side: 1, field: "D8", moves: [] },
    K: { type: "K", side: 1, field: "E8", moves: [] },
    B2: { type: "B", side: 1, field: "F8", moves: [] },
    N2: { type: "N", side: 1, field: "G8", moves: [] },
    R2: { type: "R", side: 1, field: "H8", moves: [] },
    P1: { type: "P", side: 1, field: "A7", moves: [] },
    P2: { type: "P", side: 1, field: "B7", moves: [] },
    P3: { type: "P", side: 1, field: "C7", moves: [] },
    P4: { type: "P", side: 1, field: "D7", moves: [] },
    P5: { type: "P", side: 1, field: "E7", moves: [] },
    P6: { type: "P", side: 1, field: "F7", moves: [] },
    P7: { type: "P", side: 1, field: "G7", moves: [] },
    P8: { type: "P", side: 1, field: "H7", moves: [] }
  }
};

export const takenFieldsAtStart = {
  A1: {
    figure: { type: "R", side: 0, field: "A1", moves: [] },
    color: 0,
    field: "A1",
    row: 1,
    column: 1
  },
  B1: {
    figure: { type: "N", side: 0, field: "B1", moves: [] },
    color: 1,
    field: "B1",
    row: 1,
    column: 2
  },
  C1: {
    figure: { type: "B", side: 0, field: "C1", moves: [] },
    color: 0,
    field: "C1",
    row: 1,
    column: 3
  },
  D1: {
    figure: { type: "Q", side: 0, field: "D1", moves: [] },
    color: 1,
    field: "D1",
    row: 1,
    column: 4
  },
  E1: {
    figure: { type: "K", side: 0, field: "E1", moves: [] },
    color: 0,
    field: "E1",
    row: 1,
    column: 5
  },
  F1: {
    figure: { type: "B", side: 0, field: "F1", moves: [] },
    color: 1,
    field: "F1",
    row: 1,
    column: 6
  },
  G1: {
    figure: { type: "N", side: 0, field: "G1", moves: [] },
    color: 0,
    field: "G1",
    row: 1,
    column: 7
  },
  H1: {
    figure: { type: "R", side: 0, field: "H1", moves: [] },
    color: 1,
    field: "H1",
    row: 1,
    column: 8
  },
  A2: {
    figure: { type: "P", side: 0, field: "A2", moves: [] },
    color: 1,
    field: "A2",
    row: 2,
    column: 1
  },
  B2: {
    figure: { type: "P", side: 0, field: "B2", moves: [] },
    color: 0,
    field: "B2",
    row: 2,
    column: 2
  },
  C2: {
    figure: { type: "P", side: 0, field: "C2", moves: [] },
    color: 1,
    field: "C2",
    row: 2,
    column: 3
  },
  D2: {
    figure: { type: "P", side: 0, field: "D2", moves: [] },
    color: 0,
    field: "D2",
    row: 2,
    column: 4
  },
  E2: {
    figure: { type: "P", side: 0, field: "E2", moves: [] },
    color: 1,
    field: "E2",
    row: 2,
    column: 5
  },
  F2: {
    figure: { type: "P", side: 0, field: "F2", moves: [] },
    color: 0,
    field: "F2",
    row: 2,
    column: 6
  },
  G2: {
    figure: { type: "P", side: 0, field: "G2", moves: [] },
    color: 1,
    field: "G2",
    row: 2,
    column: 7
  },
  H2: {
    figure: { type: "P", side: 0, field: "H2", moves: [] },
    color: 0,
    field: "H2",
    row: 2,
    column: 8
  },
  A8: {
    figure: { type: "R", side: 1, field: "A8", moves: [] },
    color: 1,
    field: "A8",
    row: 8,
    column: 1
  },
  B8: {
    figure: { type: "N", side: 1, field: "B8", moves: [] },
    color: 0,
    field: "B8",
    row: 8,
    column: 2
  },
  C8: {
    figure: { type: "B", side: 1, field: "C8", moves: [] },
    color: 1,
    field: "C8",
    row: 8,
    column: 3
  },
  D8: {
    figure: { type: "Q", side: 1, field: "D8", moves: [] },
    color: 0,
    field: "D8",
    row: 8,
    column: 4
  },
  E8: {
    figure: { type: "K", side: 1, field: "E8", moves: [] },
    color: 1,
    field: "E8",
    row: 8,
    column: 5
  },
  F8: {
    figure: { type: "B", side: 1, field: "F8", moves: [] },
    color: 0,
    field: "F8",
    row: 8,
    column: 6
  },
  G8: {
    figure: { type: "N", side: 1, field: "G8", moves: [] },
    color: 1,
    field: "G8",
    row: 8,
    column: 7
  },
  H8: {
    figure: { type: "R", side: 1, field: "H8", moves: [] },
    color: 0,
    field: "H8",
    row: 8,
    column: 8
  },
  A7: {
    figure: { type: "P", side: 1, field: "A7", moves: [] },
    color: 0,
    field: "A7",
    row: 7,
    column: 1
  },
  B7: {
    figure: { type: "P", side: 1, field: "B7", moves: [] },
    color: 1,
    field: "B7",
    row: 7,
    column: 2
  },
  C7: {
    figure: { type: "P", side: 1, field: "C7", moves: [] },
    color: 0,
    field: "C7",
    row: 7,
    column: 3
  },
  D7: {
    figure: { type: "P", side: 1, field: "D7", moves: [] },
    color: 1,
    field: "D7",
    row: 7,
    column: 4
  },
  E7: {
    figure: { type: "P", side: 1, field: "E7", moves: [] },
    color: 0,
    field: "E7",
    row: 7,
    column: 5
  },
  F7: {
    figure: { type: "P", side: 1, field: "F7", moves: [] },
    color: 1,
    field: "F7",
    row: 7,
    column: 6
  },
  G7: {
    figure: { type: "P", side: 1, field: "G7", moves: [] },
    color: 0,
    field: "G7",
    row: 7,
    column: 7
  },
  H7: {
    figure: { type: "P", side: 1, field: "H7", moves: [] },
    color: 1,
    field: "H7",
    row: 7,
    column: 8
  }
};
