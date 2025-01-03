import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/statistics";

export const statsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // General Statistics
    getStatistics: builder.query({
      query: () => `${USERS_URL}/stats`,
      providesTags: ["Statistics"],
    }),

    getEatingHabitsByAge: builder.query({
      query: () => `${USERS_URL}/eatingHabits`,
      providesTags: ["EatingHabits"],
    }),


    // Demographic Statistics

    getGenderStatistics: builder.query({
      query: () => `${USERS_URL}/genderStats`,
      providesTags: ["GenderStatistics"],
    }),

    getAgeGroupDistribution: builder.query({
      query: () => `${USERS_URL}/age-group`,
      providesTags: ["AgeGroupDistribution"],
    }),

    getCountryRepresentation: builder.query({
      query: () => `${USERS_URL}/countryRepresentation`,
      providesTags: ["CountryRepresentation"],
    }),

    getSocialStatus: builder.query({
      query: () => `${USERS_URL}/socialStatus`,
      providesTags: ["SocialStatus"],
    }),

    getAverageChildrenStatistics: builder.query({
      query: () => `${USERS_URL}/averageChildren`,
      providesTags: ["AverageChildrenStatistics"],
    }),

    getParticipantsByState: builder.query({
      query: (stateName) => `${USERS_URL}/participantsByState/${stateName}`,
      providesTags: ["StateStatistics"],
    }),

    // Health and diet statistics

    getFruitStatisticsByCountry: builder.query({
      query: () => `${USERS_URL}/fruitStatsByCountry`,
      providesTags: ["FruitStatisticsByCountry"],
    }),

    getStatisticsDiet: builder.query({
      query: () => `${USERS_URL}/statisticsDiet`,
      providesTags: ["StatisticsDiet"],
    }),

    getStatisticsAverageFruitIntake: builder.query({
      query: () => `${USERS_URL}/statisticsAverageFruitIntake`,
      providesTags: ["StatisticsAverageFruitIntake"],
    }),

    getStatisticsAverageVegetableIntake: builder.query({
      query: () => `${USERS_URL}/statisticsAverageVegetableIntake`,
      providesTags: ["StatisticsAverageVegetableIntake"],
    }),

    getStatisticsVegetarianVeganPercentage: builder.query({
      query: () => `${USERS_URL}/statisticsVegetarianVeganPercentage`,
      providesTags: ["StatisticsVegetarianVeganPercentage"],
    }),

    getMedicalHistoryByFoodChoices: builder.query({
      query: () => `${USERS_URL}/medicalHistory`,
      providesTags: ["MedicalHistory"],
    }),

    getMedicalHistoryByHabitsAndSport: builder.query({
      query: () => `${USERS_URL}/medicalHistorySport`,
      providesTags: ["MedicalHistoryHabitsSport"],
    }),

    getPhysicalActivityRatio: builder.query({
      query: () => `${USERS_URL}/physicalRatio`,
      providesTags: ["PhysicalActivityRatio"],
    }),

    //Economic Statistics

    getIncomeDistribution: builder.query({
      query: () => `${USERS_URL}/incomeDistribution`,
      providesTags: ["IconcomeDistribution"],
    }),

    getIncomeDietCorrelation: builder.query({
      query: () => `${USERS_URL}/incomeDietCorrelation`,
      providesTags: ["IncomeDietCorrelation"],
    }),

    getEatingOutVsCooking: builder.query({
      query: () => `${USERS_URL}/eatingOutVsCooking`,
      providesTags: ["EatingOutVsCooking"],
    }),

    calculateActivityDietCorrelation: builder.query({
      query: () => `${USERS_URL}/calculateActivityDietCorrelation`,
      providesTags: ["ActivityDietCorrelation"],
    }),

    calculateFastFoodConsumptionFrequency: builder.query({
      query: () => `${USERS_URL}/calculateFastFoodConsumptionFrequency`,
      providesTags: ["FastFoodConsumptionFrequency"],
    }),

    getDietAgeCorrelation: builder.query({
      query: () => `${USERS_URL}/dietAgeCorrelation`,
      providesTags: ["DietAgeCorrelation"],
    }),

    getPizza: builder.query({
      query: () => `${USERS_URL}/pizza`,
      providesTags: ["Pizza"],
    })



  }),
});

export const {
  useGetStatisticsQuery,
  useGetEatingHabitsByAgeQuery,
  useGetMedicalHistoryByFoodChoicesQuery,
  useGetMedicalHistoryByHabitsAndSportQuery,
  useGetFruitStatisticsByCountryQuery,
  useGetGenderStatisticsQuery,
  useGetAgeGroupDistributionQuery,
  useGetCountryRepresentationQuery,
  useGetSocialStatusQuery,
  useGetAverageChildrenStatisticsQuery,
  useGetStatisticsDietQuery,
  useGetStatisticsAverageFruitIntakeQuery,
  useGetStatisticsAverageVegetableIntakeQuery,
  useGetStatisticsVegetarianVeganPercentageQuery,
  useGetPhysicalActivityRatioQuery,
  useGetParticipantsByStateQuery,
  useGetIncomeDistributionQuery,
  useGetIncomeDietCorrelationQuery,
  useGetEatingOutVsCookingQuery,
  useCalculateActivityDietCorrelationQuery,
  useCalculateFastFoodConsumptionFrequencyQuery,
  useGetDietAgeCorrelationQuery,
  useGetPizzaQuery,
} = statsApiSlice;
