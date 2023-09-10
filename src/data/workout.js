export const Workouts = [
    {
      UpperBody: [
        {
          name: 'Push-Ups',
          description: 'A classic bodyweight exercise for chest and triceps.',
          levels: {
            beginner: {
              name: 'Push-Ups',
              description: 'A classic bodyweight exercise for chest and triceps.',
              sets: 3,
              reps: 10,
              video : require("./videos/Pushups.mp4")
            },
            intermediate: {
              name: 'Diamond Push-Ups',
              description: 'Intermediate version targeting triceps and chest.',
              sets: 4,
              reps: 12,
              video : require("./videos/Diamond_pushups.mp4")
            },
            advanced: {
              name: 'One-Arm Push-Ups (Left/Right)',
              description: 'Advanced version focusing on one arm at a time.',
              sets: 5,
              reps: 15,
              video : require("./videos/One_arm_pushups.mp4")
            },
          },
        },
        {
          name: 'Pull-Ups',
          description: 'Strengthens the back and biceps.',
          levels: {
            beginner: {
              name: 'Pull-Ups',
              description: 'Strengthens the back and biceps.',
              sets: 3,
              reps: 5,
              video : require("./videos/Pullups.mp4")
            },
            intermediate: {
              name: 'Wide-Grip Pull-Ups',
              description: 'Intermediate version with a wider hand placement.',
              sets: 4,
              reps: 8,
              video : require("./videos/Wide_pullups.mp4")
            },
            advanced: {
              name: 'Muscle-Ups (Left/Right)',
              description: 'Advanced version incorporating a powerful pull and dip.',
              sets: 5,
              reps: 10,
              video : require("./videos/Muscle_ups.mp4")
            },
          },
        },
        {
          name: 'Dumbbell Bench Press',
          description: 'Targets the chest and triceps.',
          levels: {
            beginner: {
              name: 'Dumbbell Bench Press',
              description: 'Targets the chest and triceps.',
              sets: 3,
              reps: 8,
              video : require("./videos/Dumbbell_Bench_Press.mp4")
            },
            intermediate: {
              name: 'Incline Dumbbell Bench Press',
              description: 'Intermediate version targeting the upper chest.',
              sets: 4,
              reps: 10,
              video : require("./videos/incline_dumbbell_bench_press.mp4")
            },
            advanced: {
              name: 'Barbell Bench Press',
              description: 'Advanced version using a barbell for increased resistance.',
              sets: 5,
              reps: 12,
              video : require("./videos/barbell_bench_press.mp4")
            },
          },
        },
        {
          name: 'Bicep Curls',
          description: 'Strengthens the biceps.',
          levels: {
            beginner: {
              name: 'Bicep Curls',
              description: 'Strengthens the biceps.',
              sets: 3,
              reps: 10,
              video : require("./videos/Bicep_Curls.mp4")
            },
            intermediate: {
              name: 'Hammer Curls',
              description: 'Intermediate version targeting both biceps and forearms.',
              sets: 4,
              reps: 12,
              video : require("./videos/hammer_curls.mp4")
            },
            advanced: {
              name: 'Preacher Curls (Left/Right)',
              description: 'Advanced version using a preacher curl bench.',
              sets: 5,
              reps: 15,
              video : require("./videos/preacher_curls.mp4")
            },
          },
        },
        {
          name: 'Tricep Dips',
          description: 'Targets the triceps and shoulders.',
          levels: {
            beginner: {
              name: 'Tricep Dips',
              description: 'Targets the triceps and shoulders.',
              sets: 3,
              reps: 8,
              video : require("./videos/Tricep_dips.mp4")
            },
            intermediate: {
              name: 'Weighted Tricep Dips',
              description: 'Intermediate version with added weight for increased intensity.',
              sets: 4,
              reps: 10,
              video : require("./videos/Weighted_dips.mp4")
            },
            advanced: {
              name: 'Tricep Pushdowns (Left/Right)',
              description: 'Advanced version using a cable machine.',
              sets: 5,
              reps: 12,
              video : require("./videos/Tricep_Pushdowns.mp4")
            },
          },
        },
        {
          name: 'Lateral Raises',
          description: 'Strengthens the shoulders.',
          levels: {
            beginner: {
              name: 'Lateral Raises',
              description: 'Strengthens the shoulders.',
              sets: 3,
              reps: 10,
              video : require("./videos/full_range_side_lateral_raises.mp4")
            },
            intermediate: {
              name: 'Front Raises',
              description: 'Intermediate version focusing on the front shoulder muscles.',
              sets: 4,
              reps: 12,
              video : require("./videos/front_delt_raises.mp4")
            },
            advanced: {
              name: 'Military Press',
              description: 'Advanced version incorporating overhead shoulder press.',
              sets: 5,
              reps: 15,
              video : require("./videos/overhead_press_military_press.mp4")
            },
          },
        },
      ],
    },
    {
        LowerBody: [
        {
          name: 'Squats',
          description: 'A fundamental exercise for building leg strength.',
          levels: {
            beginner: {
              name: 'Squats',
              description: 'A fundamental exercise for building leg strength.',
              sets: 3,
              reps: 8,
              video : require("./videos/Squats.mp4")
            },
            intermediate: {
              name: 'Front Squats',
              description: 'Intermediate version shifting the weight to the front of the body.',
              sets: 4,
              reps: 10,
              video : require("./videos/front_squats.mp4")
            },
            advanced: {
              name: 'Barbell Squats',
              description: 'Advanced version using a barbell for added resistance.',
              sets: 5,
              reps: 12,
              video : require("./videos/barbell_squats.mp4")
            },
          },
        },
        {
          name: 'Deadlifts',
          description: 'Targets the lower back, glutes, and hamstrings.',
          levels: {
            beginner: {
              name: 'Deadlifts',
              description: 'Targets the lower back, glutes, and hamstrings.',
              sets: 3,
              reps: 6,
              video : require("./videos/Deadlifts.mp4")
            },
            intermediate: {
              name: 'Romanian Deadlifts',
              description: 'Intermediate version with emphasis on hamstrings.',
              sets: 4,
              reps: 8,
              video : require("./videos/RomanianDeadlifts.mp4")
            },
            advanced: {
              name: 'Sumo Deadlifts (Left/Right)',
              description: 'Advanced version with a wider stance for variation.',
              sets: 5,
              reps: 10,
              video : require("./videos/sumo_deadlifts.mp4")
            },
          },
        },
        {
          name: 'Leg Press',
          description: 'Strengthens the quadriceps and hamstrings.',
          levels: {
            beginner: {
              name: 'Leg Press',
              description: 'Strengthens the quadriceps and hamstrings.',
              sets: 3,
              reps: 10,
              video : require("./videos/leg_press.mp4")
            },
            intermediate: {
              name: 'Hack Squats',
              description: 'Intermediate version focusing on the quads with a machine.',
              sets: 4,
              reps: 12,
              video : require("./videos/hack_squats.mp4")
            },
            advanced: {
              name: 'Pistol Squats (Left/Right)',
              description: 'Advanced version with single-leg squats for balance and strength.',
              sets: 5,
              reps: 15,
              video : require("./videos/assisted_pistol_squat.mp4")
            },
          },
        },
        {
          name: 'Lunges',
          description: 'Works on balance and targets the legs.',
          levels: {
            beginner: {
              name: 'Lunges',
              description: 'Works on balance and targets the legs.',
              sets: 3,
              reps: 8,
              video : require("./videos/Lunges.mp4")
            },
            intermediate: {
              name: 'Bulgarian Split Squats (Left/Right)',
              description: 'Intermediate version with one foot elevated for added challenge.',
              sets: 4,
              reps: 10,
              video : require("./videos/bulgarian_split_squats.mp4")
            },
            advanced: {
              name: 'Walking Lunges (Left/Right)',
              description: 'Advanced version with continuous walking steps for challenge.',
              sets: 5,
              reps: 12,
              video : require("./videos/walking_lunges.mp4")
            },
          },
        },
        {
          name: 'Calf Raises',
          description: 'Strengthens the calf muscles.',
          levels: {
            beginner: {
              name: 'Calf Raises',
              description: 'Strengthens the calf muscles.',
              sets: 3,
              reps: 10,
              video : require("./videos/standing_calf_raises.mp4")
            },
            intermediate: {
              name: 'Seated Calf Raises',
              description: 'Intermediate version using a seated calf raise machine.',
              sets: 4,
              reps: 12,
              video : require("./videos/seated_calf_raises.mp4")
            },
            advanced: {
              name: 'Donkey Calf Raises (Left/Right)',
              description: 'Advanced version with a partner providing resistance.',
              sets: 5,
              reps: 15,
              video : require("./videos/donkey_calf_raises.mp4")
            },
          },
        },
      ],
    },
    {
        Circuit: [
        {
          name: 'Burpees',
          description: 'A full-body exercise that combines squats, push-ups, and jumps.',
          levels: {
            beginner: {
              name: 'Burpees',
              description: 'A full-body exercise that combines squats, push-ups, and jumps.',
              sets: 3,
              reps: 5,
              video : require("./videos/Burpees.mp4")
            },
            intermediate: {
              name: 'Mountain Climbers',
              description: 'Intermediate version targeting core and cardio endurance.',
              sets: 4,
              reps: 10,
              video : require("./videos/mountain_climbers.mp4")
            },
            advanced: {
              name: 'Plyometric Burpees',
              description: 'Advanced version with explosive jumps.',
              sets: 5,
              reps: 15,
              video : require("./videos/PlyometricBurpees.mp4")
            },
          },
        },
        {
          name: 'Planks',
          description: 'Core-strengthening exercise.',
          levels: {
            beginner: {
              name: 'Planks',
              description: 'Core-strengthening exercise.',
              sets: 3,
              time: '30 seconds',
              video : require("./videos/planks.mp4")
            },
            intermediate: {
              name: 'Side Planks (Left/Right)',
              description: 'Intermediate version focusing on obliques.',
              sets: 4,
              time: '45 seconds (each side)',
              video : require("./videos/side_planks.mp4")
            },
            advanced: {
              name: 'Plank with Leg Lifts (Left/Right)',
              description: 'Advanced version adding leg lifts for extra challenge.',
              sets: 5,
              time: '1 minute',
              video : require("./videos/PlankwithLegLifts.mp4")
            },
          },
        },
        {
          name: 'Jumping Lunges (Left/Right)',
          description: 'Combines lunges with explosive jumps.',
          levels: {
            beginner: {
              name: 'Jumping Lunges (Left/Right)',
              description: 'Combines lunges with explosive jumps.',
              sets: 3,
              reps: 8,
              video : require("./videos/jumping_lunges.mp4")
            },
            intermediate: {
              name: 'Jump Squats',
              description: 'Intermediate version with squat jumps.',
              sets: 4,
              reps: 10,
              video : require("./videos/jump_squats.mp4")
            },
            advanced: {
              name: 'Pistol Squats with Jumps (Left/Right)',
              description: 'Advanced version combining single-leg squats with jumps.',
              sets: 5,
              reps: 12,
              video : require("./videos/PistolSquatswithJumps.mp4")
            },
          },
        },
        {
          name: 'Push-Up to Plank',
          description: 'Combines push-ups with planks for core and upper body.',
          levels: {
            beginner: {
              name: 'Push-Up to Plank',
              description: 'Combines push-ups with planks for core and upper body.',
              sets: 3,
              reps: 8,
              video : require("./videos/PushupToPlank.mp4")
            },
            intermediate: {
              name: 'T-Push-Ups',
              description: 'Intermediate version adding a rotation at the top of the push-up.',
              sets: 4,
              reps: 10,
              video : require("./videos/t_push_ups_-_hb_method.mp4")
            },
            advanced: {
              name: 'Clapping Push-Ups',
              description: 'Advanced version with explosive claps at the top of the push-up.',
              sets: 5,
              reps: 12,
              video : require("./videos/clapping_push-ups.mp4")
            },
          },
        },
        {
          name: 'Kettlebell Swings',
          description: 'Full-body exercise using a kettlebell for power and cardio.',
          levels: {
            beginner: {
              name: 'Kettlebell Swings',
              description: 'Full-body exercise using a kettlebell for power and cardio.',
              sets: 3,
              reps: 10,
              video : require("./videos/kettlebell_swings.mp4")
            },
            intermediate: {
              name: 'Single-Arm Kettlebell Swings (Left/Right)',
              description: 'Intermediate version focusing on one arm at a time.',
              sets: 4,
              reps: 12,
              video : require("./videos/single-arm-kettlebell-swings.mp4")
            },
            advanced: {
              name: 'Kettlebell Snatches (Left/Right)',
              description: 'Advanced version with a full overhead snatch motion.',
              sets: 5,
              reps: 15,
              video : require("./videos/kettlebell_snatches.mp4")
            },
          },
        },
        {
          name: 'Mountain Climbers',
          description: 'Cardio and core-strengthening exercise.',
          levels: {
            beginner: {
              name: 'Mountain Climbers',
              description: 'Cardio and core-strengthening exercise.',
              sets: 3,
              reps: 10,
              video : require("./videos/mountain_climbers.mp4")
            },
            intermediate: {
              name: 'Spider-Man Mountain Climbers (Left/Right)',
              description: 'Intermediate version with knee-to-elbow movement.',
              sets: 4,
              reps: 12,
              video : require("./videos/spider-man_mountain_climbers.mp4")
            },
            advanced: {
              name: 'Explosive Mountain Climbers (Left/Right)',
              description: 'Advanced version with explosive switches.',
              sets: 5,
              reps: 15,
              video : require("./videos/fast_mountain_climbers.mp4")
            },
          },
        },
      ],
    },
  ];
  