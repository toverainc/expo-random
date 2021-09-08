import { ConfigPlugin } from '@expo/config-plugins';

const withNewName: ConfigPlugin<{ name?: string }> = (config, { name = 'expo-random' } = {}) => {
  config.name = name;
  return config;
};

export default withNewName;
