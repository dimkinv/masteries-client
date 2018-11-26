export class Mastery {
  levels: Level[];
}

export class Level {
  minTestsRequired: number;
  level: number;
  tests: Test[];
}

export class Test {
  name: string;
}
