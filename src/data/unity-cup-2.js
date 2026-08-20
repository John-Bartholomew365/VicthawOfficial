// =============================================================
// UNITY CUP 2.0 - TOURNAMENT DATA
// -------------------------------------------------------------
// Fixtures, groups, dates, team managers and top scorers are real.
// Items still marked "(PLACEHOLDER)" (goalscorers per match, sponsors,
// prize amounts) should be replaced as they become available.
// =============================================================

export const edition = {
  version: "2.0",
  fullTitle: "Victhaw Official Unity Cup 2.0",
  shortTitle: "Unity Cup 2.0",
  dates: "August 8th - September 6th, 2026",
  venue: "Basin Stadium, Ilorin, Kwara State",
  format: "Group Stage (Groups A & B) + Semi-Finals + Third Place + Final",
  numberOfTeams: 8,
  accentColor: "#C81E23",
  heroImage: "/victhaw-logo.svg",
  champion: {
    teamSlug: null,
    teamName: "TBD",
    announced: false,
  },
};

// -------------------------------------------------------------
// TEAMS
// -------------------------------------------------------------
// slug: used for the team's page URL (/tournament/team/<slug>)
// logo: square badge used on cards / tables
// image: larger photo used on the team's profile page
// group: "A" or "B"
// -------------------------------------------------------------

export const teams = [
  {
    slug: "bankers-all-stars",
    name: "Bankers All Stars FC",
    shortName: "Bankers All Stars",
    logo: "/bankers-fc.png",
    image: "/team-bankers.jpeg",
    group: "A",
    tagline: "The Defending Champions",
    manager: "Coach Song",
    overview:
      "Bankers All Stars FC is an elite football club formed by veteran bankers and financial professionals. Known for their strategic play and financial discipline on the pitch, they dominated Unity Cup 1.0 and return to defend their title with the same blend of experience and tactical brilliance.",
    specialties: [
      "Solid defensive structure (The \u201cOld Guard\u201d setup)",
      "Calculated ball movement (The \u201cInsurance Flow\u201d rhythm)",
      "Smart set-piece routines (The \u201cPremium Delivery\u201d playbook)",
      "Mature decision-making on the field (The \u201cExecutive Finish\u201d)",
    ],
    legacy:
      "The name \u201cBankers All Stars\u201d carries weight in football circles. After winning the inaugural Unity Cup 1.0, the team has evolved from casual matches between financial institutions to defending champions. Their experience creates an unstoppable force on the pitch.",
    membership: [
      "Open only to current or former banking/finance professionals",
      "Must demonstrate exceptional football IQ and discipline",
      "Commitment to the team's values of integrity and excellence",
    ],
    philosophy:
      "We play the game like we manage portfolios - with precision, strategy, and an eye for opportunity. Every match is an investment, and we always deliver returns.",
    motto: "- Bankers All Stars FC Motto",
  },
  {
    slug: "corporate-ballers",
    name: "Corporate Ballers FA",
    shortName: "Corporate Ballers",
    logo: "/corporate-ballers.png",
    image: "/corporate-ballers.png",
    group: "A",
    tagline: "The Professional Newcomers",
    manager: "Shola Onipe",
    overview:
      "Corporate Ballers FA brings together professionals from various corporate backgrounds who share a passion for the beautiful game. (PLACEHOLDER - replace with the real 2.0 team profile.)",
    specialties: [
      "High-press team work rate",
      "Quick combination play through midfield",
      "Set-piece strength and aerial dominance",
      "Professional discipline and game management",
    ],
    legacy:
      "Fresh off a strong showing in Unity Cup 1.0, Corporate Ballers FA are building a reputation as a well-organized, ambitious outfit. (PLACEHOLDER content.)",
    membership: [
      "Membership drawn from corporate and professional communities",
      "Commitment to regular training and team culture",
      "Passion for competitive, fair football",
    ],
    philosophy:
      "We compete like professionals and play like a family - every game is a new opportunity to grow stronger.",
    motto: "- Corporate Ballers FA Motto",
  },
  {
    slug: "first-stars",
    name: "FIRST STARS FC",
    shortName: "First Stars",
    logo: "/first-stars.jpeg",
    image: "/first-stars.jpeg",
    group: "B",
    tagline: "Rising With Purpose",
    manager: "ALAGBE TUNDE ISAAC",
    overview:
      "FIRST STARS FC are a determined side making their Unity Cup debut. (PLACEHOLDER - replace with the real 2.0 team profile.)",
    specialties: [
      "Fast, direct attacking transitions",
      "Youthful energy and relentless pressing",
      "Strong team spirit and never-say-die attitude",
      "Organized defensive shape",
    ],
    legacy:
      "A fresh name in the tournament, FIRST STARS FC are hungry to make an immediate impact. (PLACEHOLDER content.)",
    membership: [
      "Players selected on merit and commitment",
      "Regular training and tactical preparation",
      "Unity and sportsmanship above all",
    ],
    philosophy:
      "Every match is a chance to shine - we play with heart, discipline, and belief.",
    motto: "- FIRST STARS FC Motto",
  },
  {
    slug: "kwaita-united",
    name: "KWAITA UNITED FC",
    shortName: "Kwaita United",
    logo: "/kwaita.jpeg",
    image: "/kwaita.jpeg",
    group: "B",
    tagline: "Proud, United, Determined",
    manager: "EBENZER OSUJI",
    overview:
      "KWAITA UNITED FC represent their community with pride and play a competitive, team-first brand of football. (PLACEHOLDER - replace with the real 2.0 team profile.)",
    specialties: [
      "Compact team defending",
      "Clinical counter-attacking",
      "Strong set-piece delivery",
      "Unbreakable team unity",
    ],
    legacy:
      "Kwaita United carry the hopes of their supporters into their Unity Cup debut. (PLACEHOLDER content.)",
    membership: [
      "Representing the Kwaita community",
      "Discipline, respect and hard work on and off the pitch",
      "Collective responsibility in every game",
    ],
    philosophy:
      "We are one community, one team - we fight together and win together.",
    motto: "- KWAITA UNITED FC Motto",
  },
  {
    slug: "glamour",
    name: "GLAMOUR FC",
    shortName: "Glamour",
    logo: "/glamour.jpeg",
    image: "/glamour.jpeg",
    group: "A",
    tagline: "Style Meets Substance",
    manager: "TOSIN OSHIN",
    overview:
      "GLAMOUR FC bring flair and confidence to the pitch, mixing attractive football with a winning mentality. (PLACEHOLDER - replace with the real 2.0 team profile.)",
    specialties: [
      "Creative, flair-driven attacking play",
      "Technical skill in tight spaces",
      "Confident ball possession",
      "Big-game temperament",
    ],
    legacy:
      "New to the Unity Cup, Glamour FC aim to light up the tournament with their entertaining style. (PLACEHOLDER content.)",
    membership: [
      "Skilful players with a love for expressive football",
      "Commitment to entertaining and disciplined play",
      "Strong sense of identity and pride",
    ],
    philosophy:
      "We play beautiful football and back it up with results - style and substance in every performance.",
    motto: "- GLAMOUR FC Motto",
  },
  {
    slug: "phoenix-legend",
    name: "PHOENIX LEGEND FC",
    shortName: "Phoenix Legend",
    logo: "/phoenix.jpeg",
    image: "/phoenix.jpeg",
    group: "B",
    tagline: "Rising From The Ashes",
    manager: "AKERELE TOBI",
    overview:
      "PHOENIX LEGEND FC are built on resilience and a never-give-up mentality, ready to rise in Unity Cup 2.0. (PLACEHOLDER - replace with the real 2.0 team profile.)",
    specialties: [
      "Remarkable resilience and late-game intensity",
      "Powerful physical presence",
      "Direct, dangerous attacks",
      "Winning mentality under pressure",
    ],
    legacy:
      "Named after the mythical bird, Phoenix Legend FC symbolize rebirth and determination. (PLACEHOLDER content.)",
    membership: [
      "Players known for fight and determination",
      "Shared belief in constant improvement",
      "Loyalty to the badge and to each other",
    ],
    philosophy:
      "No matter how many times we fall, we always rise again - legends are forged in fire.",
    motto: "- PHOENIX LEGEND FC Motto",
  },
  {
    slug: "fortunate",
    name: "FORTUNATE FC",
    shortName: "Fortunate",
    logo: "/fortunate.jpeg",
    image: "/fortunate.jpeg",
    group: "A",
    tagline: "Blessed To Compete",
    manager: "YAHAYA MUSA",
    overview:
      "FORTUNATE FC are a hardworking, ambitious side making their Unity Cup debut in 2.0. (PLACEHOLDER - replace with the real 2.0 team profile.)",
    specialties: [
      "Strong team organization",
      "Patient build-up and ball control",
      "Sharp finishing in the final third",
      "Excellent work rate across the pitch",
    ],
    legacy:
      "Fortunate FC bring a fresh, positive energy to the tournament and are determined to make their mark. (PLACEHOLDER content.)",
    membership: [
      "Ambitious players united by a common goal",
      "Consistent training and preparation",
      "Sportsmanship and humility",
    ],
    philosophy:
      "We are fortunate to play the game we love - and we honour it with effort, respect, and passion.",
    motto: "- FORTUNATE FC Motto",
  },
  {
    slug: "excel-stars",
    name: "EXCEL STARS FC",
    shortName: "Excel Stars",
    logo: "/excel-stars.jpeg",
    image: "/excel-stars.jpeg",
    group: "B",
    tagline: "Excellence In Motion",
    manager: "YUSUF WILFRED",
    overview:
      "EXCEL STARS FC strive for excellence in everything they do, combining skill, discipline, and ambition. (PLACEHOLDER - replace with the real 2.0 team profile.)",
    specialties: [
      "Excellent technical fundamentals",
      "Fluid, attacking combinations",
      "High football intelligence",
      "Strong squad depth",
    ],
    legacy:
      "Excel Stars aim to turn their commitment to excellence into a deep tournament run. (PLACEHOLDER content.)",
    membership: [
      "Selection based on talent and dedication",
      "Professional attitude in training and matches",
      "Commitment to constant self-improvement",
    ],
    philosophy:
      "Excellence is not a skill, it is an attitude - we bring it to every training and every match.",
    motto: "- EXCEL STARS FC Motto",
  },
];

export const groups = [
  {
    name: "A",
    teams: ["bankers-all-stars", "corporate-ballers", "glamour", "fortunate"],
  },
  {
    name: "B",
    teams: ["kwaita-united", "first-stars", "phoenix-legend", "excel-stars"],
  },
];

export const teamsBySlug = teams.reduce((acc, team) => {
  acc[team.slug] = team;
  return acc;
}, {});

export function getTeam(slug) {
  return teamsBySlug[slug] || null;
}

// -------------------------------------------------------------
// FIXTURES (real 2.0 schedule)
// -------------------------------------------------------------
// matches reference team slugs; knockout opponents use
// "Winner Group X" / "Runner-up Group X" / "Winner Semi Final X"
// / "Loser Semi Final X" placeholders until teams qualify.
// Kick-off times: first match 4:00 PM, second match 5:20 PM.
// -------------------------------------------------------------

export const fixtures = [
  {
    round: "Group A - Matchday 3",
    stage: "Group Stage",
    matches: [
      { home: "corporate-ballers", away: "fortunate", date: "Sat 22 Aug 2026", time: "4:00 PM", completed: false },
      { home: "bankers-all-stars", away: "glamour", date: "Sat 22 Aug 2026", time: "5:20 PM", completed: false },
    ],
  },
  {
    round: "Group B - Matchday 3",
    stage: "Group Stage",
    matches: [
      { home: "excel-stars", away: "kwaita-united", date: "Sun 23 Aug 2026", time: "4:00 PM", completed: false },
      { home: "phoenix-legend", away: "first-stars", date: "Sun 23 Aug 2026", time: "5:20 PM", completed: false },
    ],
  },
  {
    round: "Semi Final 1",
    stage: "Semi Final",
    matches: [
      { home: "Winner Group A", away: "Runner-up Group B", date: "Sun 30 Aug 2026", time: "4:00 PM", completed: false },
    ],
  },
  {
    round: "Semi Final 2",
    stage: "Semi Final",
    matches: [
      { home: "Winner Group B", away: "Runner-up Group A", date: "Sun 30 Aug 2026", time: "5:20 PM", completed: false },
    ],
  },
  {
    round: "Third Place Match",
    stage: "Third Place",
    matches: [
      { home: "Loser Semi Final 1", away: "Loser Semi Final 2", date: "Sat 5 Sep 2026", time: "4:00 PM", completed: false },
    ],
  },
  {
    round: "Final",
    stage: "Final",
    matches: [
      { home: "Winner Semi Final 1", away: "Winner Semi Final 2", date: "Sun 6 Sep 2026", time: "4:00 PM", completed: false },
    ],
  },
];

// -------------------------------------------------------------
// RESULTS
// -------------------------------------------------------------
// Matchday 1 has been played. Unplayed matches show null scores.
// Add new scores to `matchResults` keyed by "<round>|<home>|<away>".
// -------------------------------------------------------------

const matchResults = {
  "Group A - Matchday 1|bankers-all-stars|corporate-ballers": {
    homeScore: 0,
    awayScore: 1,
    goalscorers: [
      { player: "TAIWO TITTA", team: "Corporate Ballers", time: "30'" },
    ],
  },
  "Group A - Matchday 1|glamour|fortunate": {
    homeScore: 1,
    awayScore: 1,
    goalscorers: [
      { player: "KUNLE ADEYANJU", team: "Glamour", time: "6'" },
      { player: "KINGSLEY", team: "Fortunate", time: "60'" },
    ],
  },
  "Group B - Matchday 1|kwaita-united|phoenix-legend": {
    homeScore: 2,
    awayScore: 1,
    goalscorers: [
      { player: "ISIAKA OLAWALE", team: "Kwaita United", time: "20'" },
      { player: "OLAWALE SODIQ", team: "Phoenix Legend", time: "45'" },
      { player: "ISIAKA OLAWALE", team: "Kwaita United", time: "56'" },
    ],
  },
  "Group B - Matchday 1|first-stars|excel-stars": {
    homeScore: 1,
    awayScore: 0,
    goalscorers: [{ player: "GAGO", team: "First Stars", time: "60'" }],
  },
  "Group A - Matchday 2|fortunate|bankers-all-stars": {
    homeScore: 1,
    awayScore: 3,
    goalscorers: [
      { player: "Ololade Hassan", team: "Bankers All Stars", time: "4'" },
      { player: "Samuel Coco", team: "Bankers All Stars", time: "25'" },
      { player: "Hakeem Oyan", team: "Bankers All Stars", time: "86'" },
      { player: "KINGSLEY", team: "Fortunate", time: "50'" },
    ],
  },
  "Group A - Matchday 2|corporate-ballers|glamour": {
    homeScore: 0,
    awayScore: 0,
    goalscorers: [],
  },
  "Group B - Matchday 2|kwaita-united|first-stars": {
    homeScore: 2,
    awayScore: 0,
    goalscorers: [
      { player: "Adigun", team: "Kwaita United", time: "4'" },
      { player: "Own Goal", team: "First Stars", time: "37'" },
    ],
  },
  "Group B - Matchday 2|phoenix-legend|excel-stars": {
    homeScore: 2,
    awayScore: 3,
    goalscorers: [
      { player: "Ladi", team: "Phoenix Legend", time: "3'" },
      { player: "Oba", team: "Excel Stars", time: "13'" },
      { player: "Alaro", team: "Excel Stars", time: "28'" },
      { player: "Ladi", team: "Phoenix Legend", time: "41'" },
      { player: "Kabir", team: "Excel Stars", time: "46'" },
    ],
  },
};

const completedMatchdayOne = [
  {
    round: "Group A - Matchday 1",
    stage: "Group Stage",
    matches: [
      {
        home: "bankers-all-stars",
        away: "corporate-ballers",
        date: "Sat 8 Aug 2026",
        time: "4:00 PM",
        completed: true,
      },
      { home: "glamour", away: "fortunate", date: "Sat 8 Aug 2026", time: "5:20 PM", completed: true },
    ],
  },
  {
    round: "Group B - Matchday 1",
    stage: "Group Stage",
    matches: [
      {
        home: "kwaita-united",
        away: "phoenix-legend",
        date: "Sun 9 Aug 2026",
        time: "4:00 PM",
        completed: true,
      },
      { home: "first-stars", away: "excel-stars", date: "Sun 9 Aug 2026", time: "5:20 PM", completed: true },
    ],
  },
  {
    round: "Group A - Matchday 2",
    stage: "Group Stage",
    matches: [
      { home: "corporate-ballers", away: "glamour", date: "Wed 19 Aug 2026", time: "4:00 PM", completed: true },
      { home: "fortunate", away: "bankers-all-stars", date: "Sat 15 Aug 2026", time: "5:20 PM", completed: true },
    ],
  },
  {
    round: "Group B - Matchday 2",
    stage: "Group Stage",
    matches: [
      { home: "kwaita-united", away: "first-stars", date: "Sun 16 Aug 2026", time: "4:00 PM", completed: true },
      { home: "phoenix-legend", away: "excel-stars", date: "Sun 16 Aug 2026", time: "5:20 PM", completed: true },
    ],
  },
];

const buildResultRound = (round) => ({
  round: round.round,
  stage: round.stage,
  matches: round.matches.map((match) => {
    const result = matchResults[`${round.round}|${match.home}|${match.away}`];
    const homeScore = result ? result.homeScore : null;
    const awayScore = result ? result.awayScore : null;
    return {
      ...match,
      homeScore,
      awayScore,
      score: homeScore !== null ? `${homeScore} - ${awayScore}` : null,
      winner:
        homeScore !== null
          ? homeScore > awayScore
            ? match.home
            : awayScore > homeScore
            ? match.away
            : null
          : null,
      walkover: false,
      goalscorers: result ? result.goalscorers || [] : [],
      stats: null,
    };
  }),
});

// Results keep Matchday 1 (played) while the schedule page starts at Matchday 2.
export const results = [
  ...completedMatchdayOne.map(buildResultRound),
  ...fixtures.map(buildResultRound),
];

// -------------------------------------------------------------
// LEAGUE STANDINGS (computed automatically from results)
// -------------------------------------------------------------

const blankStanding = (slug) => {
  const team = getTeam(slug);
  return {
    slug,
    name: team ? team.shortName : slug,
    logo: team ? team.logo : null,
    played: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    gf: 0,
    ga: 0,
    gd: 0,
    points: 0,
  };
};

const computeStandings = () => {
  const standings = {};
  for (const group of groups) {
    for (const slug of group.teams) {
      standings[slug] = blankStanding(slug);
    }
  }

  for (const round of results) {
    if (round.stage !== "Group Stage") continue;
    for (const match of round.matches) {
      if (match.homeScore === null || match.awayScore === null) continue;
      const home = standings[match.home];
      const away = standings[match.away];
      if (!home || !away) continue;
      home.played += 1;
      away.played += 1;
      home.gf += match.homeScore;
      home.ga += match.awayScore;
      away.gf += match.awayScore;
      away.ga += match.homeScore;
      if (match.homeScore > match.awayScore) {
        home.wins += 1;
        home.points += 3;
        away.losses += 1;
      } else if (match.homeScore < match.awayScore) {
        away.wins += 1;
        away.points += 3;
        home.losses += 1;
      } else {
        home.draws += 1;
        away.draws += 1;
        home.points += 1;
        away.points += 1;
      }
    }
  }

  for (const group of groups) {
    for (const slug of group.teams) {
      standings[slug].gd = standings[slug].gf - standings[slug].ga;
    }
  }

  return {
    A: groups[0].teams.map((slug) => standings[slug]),
    B: groups[1].teams.map((slug) => standings[slug]),
  };
};

export const leagueTable = computeStandings();

// -------------------------------------------------------------
// TOP SCORERS
// -------------------------------------------------------------

export const topScorers = [
  {
    player: "ISIAKA OLAWALE",
    team: "Kwaita United",
    logo: "/kwaita.jpeg",
    goals: 2,
  },
  {
    player: "KINGSLEY",
    team: "Fortunate",
    logo: "/fortunate.jpeg",
    goals: 2,
  },
  {
    player: "Ladi",
    team: "Phoenix Legend",
    logo: "/phoenix.jpeg",
    goals: 2,
  },
  {
    player: "TAIWO TITTA",
    team: "Corporate Ballers",
    logo: "/corporate-ballers.png",
    goals: 1,
  },
  {
    player: "KUNLE ADEYANJU",
    team: "Glamour",
    logo: "/glamour.jpeg",
    goals: 1,
  },
  {
    player: "OLAWALE SODIQ",
    team: "Phoenix Legend",
    logo: "/phoenix.jpeg",
    goals: 1,
  },
  {
    player: "GAGO",
    team: "First Stars",
    logo: "/first-stars.jpeg",
    goals: 1,
  },
  {
    player: "Ololade Hassan",
    team: "Bankers All Stars",
    logo: "/bankers-fc.png",
    goals: 1,
  },
  {
    player: "Samuel Coco",
    team: "Bankers All Stars",
    logo: "/bankers-fc.png",
    goals: 1,
  },
  {
    player: "Hakeem Oyan",
    team: "Bankers All Stars",
    logo: "/bankers-fc.png",
    goals: 1,
  },
  {
    player: "Adigun",
    team: "Kwaita United",
    logo: "/kwaita.jpeg",
    goals: 1,
  },
  {
    player: "Oba",
    team: "Excel Stars",
    logo: "/excel-stars.jpeg",
    goals: 1,
  },
  {
    player: "Alaro",
    team: "Excel Stars",
    logo: "/excel-stars.jpeg",
    goals: 1,
  },
  {
    player: "Kabir",
    team: "Excel Stars",
    logo: "/excel-stars.jpeg",
    goals: 1,
  },
];

// -------------------------------------------------------------
// PRIZES (placeholder - amounts to be confirmed)
// -------------------------------------------------------------

export const prizes = [
  {
    key: "champions",
    title: "Champions",
    icon: "\u{1F947}",
    accent: "border-t-4 border-yellow-400",
    iconBg: "bg-yellow-100",
    items: [
      "Gold Medals for all players",
      "Championship Trophy",
      "Cash Prize (amount TBA - PLACEHOLDER)",
    ],
  },
  {
    key: "runnerup",
    title: "Runner-up",
    icon: "\u{1F948}",
    accent: "border-t-4 border-gray-300",
    iconBg: "bg-gray-100",
    items: [
      "Silver Medals for all players",
      "Runner-up Trophy",
      "Cash Prize (amount TBA - PLACEHOLDER)",
    ],
  },
  {
    key: "individual",
    title: "Individual Awards",
    icon: "\u2B50",
    accent: "border-t-4 border-red-400",
    iconBg: "bg-red-100",
    items: [
      "Golden Ball - Best Player of the Tournament",
      "Golden Glove - Best Goalkeeper of the Tournament",
      "Top Scorer Award",
      "Fair Play Award",
    ],
  },
];

export const awards = [];

// -------------------------------------------------------------
// FAQ (placeholder answers)
// -------------------------------------------------------------

export const faqs = [
  {
    question: "When does Unity Cup 2.0 take place?",
    answer:
      "Unity Cup 2.0 runs from August 8th to September 6th, 2026 at Basin Stadium, Ilorin, Kwara State. Group games are played every weekend, with the semi-finals on 30th August, the third place match on 5th September and the final on 6th September.",
  },
  {
    question: "How many teams are participating in Unity Cup 2.0?",
    answer:
      "Unity Cup 2.0 features 8 competitive teams split into two groups of four - Group A and Group B.",
  },
  {
    question: "What is the format of Unity Cup 2.0?",
    answer:
      "The 8 teams are drawn into Groups A and B and each team plays the other three teams in its group once. The top 2 teams from each group advance to the semi-finals: Winner Group A vs Runner-up Group B and Winner Group B vs Runner-up Group A. The semi-final winners meet in the final, while the semi-final losers contest the third place match.",
  },
  {
    question: "Who won Unity Cup 1.0?",
    answer:
      "Bankers All Stars FC were crowned champions of the inaugural Unity Cup 1.0 after beating NBA FC 1-0 in the final on 29th June.",
  },
  {
    question: "Are the teams from Unity Cup 1.0 returning for 2.0?",
    answer:
      "Yes - defending champions Bankers All Stars and Corporate Ballers FA are joined by six new teams: GLAMOUR FC, FORTUNATE FC, KWAITA UNITED FC, FIRST STARS FC, PHOENIX LEGEND FC and EXCEL STARS FC.",
  },
  {
    question: "Where can I find the fixtures, results and standings?",
    answer:
      "Visit the Schedule and Results pages to see match dates, times, scores, and the live league standings for both groups.",
  },
  {
    question: "What time do matches start?",
    answer:
      "The first match on each match day kicks off at 4:00 PM and the second match at 5:20 PM.",
  },
  {
    question: "How do teams qualify for the semi-finals?",
    answer:
      "The top 2 teams from each group advance to the semi-finals. Semi Final 1 pairs the Winner of Group A against the Runner-up of Group B, while Semi Final 2 pairs the Winner of Group B against the Runner-up of Group A.",
  },
  {
    question: "Is there a third place match?",
    answer:
      "Yes. The losers of the two semi-finals contest the third place match on 5th September 2026 to decide who finishes third.",
  },
  {
    question: "How are the league standings ranked?",
    answer:
      "Teams earn 3 points for a win, 1 point for a draw and 0 points for a loss. Standings are ranked by points, then goal difference, and teams level on both are separated by goals scored.",
  },
  {
    question: "What happens if a knockout match is level after full time?",
    answer:
      "In the semi-finals, third place match and final, level scores after full time lead to 15 minutes of extra time. If the match is still tied, the winner is decided by a penalty shootout.",
  },
  {
    question: "What are the individual awards up for grabs?",
    answer:
      "Individual honours include the Golden Ball for the best player of the tournament, the Golden Glove for the best goalkeeper, and a Top Scorer award, alongside the Fair Play award.",
  },
  {
    question: "Where is the tournament held?",
    answer:
      "All matches take place at Basin Stadium, Ilorin, Kwara State.",
  },
  {
    question: "How can I follow the tournament for live updates?",
    answer:
      "Follow Victhaw Official on our social media channels for live match updates, and check the Results page here for the latest scores, standings and highlights.",
  },
  {
    question: "How can I sponsor or partner with Unity Cup 2.0?",
    answer:
      "We welcome sponsors and partners. Reach out via WhatsApp at +2348106163804 or email victhawofficial@gmail.com to discuss sponsorship opportunities and brand visibility.",
  },
];

// -------------------------------------------------------------
// SPONSORS (placeholder - to be announced)
// -------------------------------------------------------------

export const sponsors = [];

export default {
  edition,
  teams,
  groups,
  teamsBySlug,
  getTeam,
  fixtures,
  results,
  leagueTable,
  topScorers,
  prizes,
  awards,
  faqs,
  sponsors,
};
