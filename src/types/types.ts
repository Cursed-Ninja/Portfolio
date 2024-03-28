type CodeforcesUser = {
  country: string;
  lastOnlineTimeSeconds: number;
  rating: number;
  friendOfCount: number;
  titlePhoto: string;
  handle: string;
  avatar: string;
  contribution: number;
  organization: string;
  rank: string;
  maxRating: number;
  registrationTimeSeconds: number;
  maxRank: string;
};

export type CodeforcesApiResponse = {
  status: string;
  result: CodeforcesUser[];
};

export type CodeforcesData = {
  handle: string;
  rating: number;
  maxRating: number;
  rank: string;
  maxRank: string;
};

type CodechefUserDetails = {
  name: string;
  username: string;
  country: string;
  studentOrProfessional: string;
  institution: string;
  codechefProPlan: string;
};

type CodechefContestRating = {
  code: string;
  getyear: string;
  getmonth: string;
  getday: string;
  reason: string | null;
  penalised_in: string | null;
  rating: string;
  rank: string;
  name: string;
  end_date: string;
};

export type CodechefApiResponse = {
  status: string;
  rating: number;
  stars: string;
  highest_rating: number;
  global_rank: string;
  country_rank: string;
  user_details: CodechefUserDetails;
  contests: any[];
  contest_ratings: CodechefContestRating[];
};

export type CodechefData = {
  handle: string;
  rating: number;
  maxRating: number;
  stars: string;
};

export type AtcoderApiResponse = {
  status: string;
  username: string;
  platform: string;
  rating: number;
  highest: number;
  rank: number;
  level: string;
};

export type AtcoderData = {
  handle: string;
  rating: number;
  maxRating: number;
  rank: number;
  level: string;
};

export type LeetcodeApiResponse = {
  status: string;
  ranking: string;
  total_problems_solved: string;
  easy_questions_solved: string;
  medium_questions_solved: string;
  hard_questions_solved: string;
  rating: string;
  global_ranking: string;
  total_participants: string;
  top_percentage: string;
  max_rating: string;
  contest_badge: string;
};

export type LeetcodeData = {
  handle: string;
  rating: string;
  maxRating: string;
  globalRanking: string;
  topPercentage: string;
  numberOfProblemsSolved: string;
  easyProblemSolved: string;
  mediumProblemSolved: string;
  hardProblemSolved: string;
  contestBadge: string;
};
