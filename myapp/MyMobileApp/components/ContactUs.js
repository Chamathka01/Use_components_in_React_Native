import { StyleSheet } from 'react-native';
import { Text, Divider, TextInput } from 'react-native-paper';

export default function ContactUs(){
    return(
        <>
        <View style={styles.header}>
        <Text variant="headlineLarge">Contact Us</Text>
        <Divider/>
        </View>
        <View style={styles.body}>
            <TextInput label="Email" />
        </View>
        <View style={styles.footer}>
            <Text>MyApp © 2024</Text>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
      flex:3,
      width:"100%",
      alignItems: 'center'
    },
    body: {
        flex:5,
        width:"100%"
    },
    footer: {
        flex:2,
        width:"100%",
        alignItems: 'center'
    }
  });
  
