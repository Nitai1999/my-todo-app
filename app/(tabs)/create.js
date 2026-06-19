import { View, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import AppButton from '../../components/MainButton';
import { styles } from '../../styles/create.styles';

export default function Create() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter Title Here..." style={styles.input} /> {/* Added a TextInput for the title */}
      <TextInput placeholder="Enter Content Here..." style={[styles.input, { height: 100 }]} multiline />
      <AppButton
        title="Create"
        onPress={() => router.replace('/')}
      />
    </View>
  );
}