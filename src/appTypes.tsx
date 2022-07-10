type Role = { uid: number; name: string };
type Person = { uid: number; name: string; }
type Team = { uid: number; name: string; roster: { role: number; who: number }[] }

export type AppState = { people: Person[]; teams: Team[]; roles: Role[] };