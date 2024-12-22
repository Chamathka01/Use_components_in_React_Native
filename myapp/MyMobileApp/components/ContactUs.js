import { StyleSheet } from 'react-native';

export default function ContactUs(){
    return(
        <>
        <View style={styles.header}>
        </View>
        <View style={styles.body}>
        </View>
        <View style={styles.footer}>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
      flex:3,
      width:"100%"
    },
    body: {
        flex:5,
        width:"100%"
    },
    footer: {
        flex:2,
        width:"100%"
    }
  });
  
