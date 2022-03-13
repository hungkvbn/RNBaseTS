export type ProfileResponse = {
  gender: 'male' | 'female';
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
  };
  email: string;
};

export type DashboardState = {
  userProfile?: ProfileResponse;
  loading: boolean;
  error?: string;
};
