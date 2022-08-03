import { HStack, IconButton, VStack } from 'native-base';
import { SignOut } from 'phosphor-react-native';
import Logo from '../assets/logo_secondary.svg';

export function Home() {
  return (
    <VStack flex={1} pb={6} bg="gray.700">
        <HStack
            w="full"
            justifyContent="space-between"
            alignItems="center"
            pt={12}
            pb={5}
            px={6}
        >

            <Logo />
            <IconButton 
                icon={<SignOut size={26} />}
            />
        </HStack>
    </VStack>
  );
}