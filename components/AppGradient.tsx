import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppGradient({
  children,
  colors,
}: {
  children: any;
  colors: string[];
}) {
  return (
    <LinearGradient
      colors={colors}
      className="flex-1"
    >
      <SafeAreaView className="flex-1 px-5 py-3">{children}</SafeAreaView>
    </LinearGradient>
  );
}
