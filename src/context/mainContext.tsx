import React from 'react';

import { ContextType } from '../models/context.model';
const userContext = React.createContext<ContextType>({
  user: null
});

export default userContext;
