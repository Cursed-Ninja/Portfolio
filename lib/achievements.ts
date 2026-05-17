export interface Achievement {
  name: string;
  detail: string;
}

export interface AchievementGroup {
  label: string;
  items: Achievement[];
}

export const achievements: AchievementGroup[] = [
  {
    label: "Competitive Programming",
    items: [
      {
        name: "CodeForces Expert",
        detail: "Peak 1897 · Top 0.4% in India · AIR 279",
      },
      {
        name: "CodeChef 5★",
        detail: "Max 2111 · Country rank 260",
      },
      {
        name: "LeetCode Guardian",
        detail: "Peak 2306 · Top 0.65% globally",
      },
      {
        name: "ICPC Mathura-Kanpur Regionals",
        detail: "21st rank · 2022",
      },
      {
        name: "Google KickStart Round H",
        detail: "Global rank 273 / 5450 · 2022",
      },
    ],
  },
  {
    label: "Work",
    items: [
      {
        name: "Top 5% performance rating",
        detail: "Coinbase",
      },
    ],
  },
];
