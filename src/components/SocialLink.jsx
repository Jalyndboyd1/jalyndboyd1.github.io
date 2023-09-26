import React, { useCallback } from "react";
import { Linking, Pressable, View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: "1rem",
    backgroundColor: "#680747",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
  },
  socialLink: {
    padding: "10px",
    alignItems: "center",
    width: "20rem",
    flexDirection: "row",
  },
  text: {
    color: "#fff",
  },
  socialLogo: {
    height: "40px",
    width: "40px",
    marginRight: "3rem",
    marginLeft: "3rem",
    objectFit: "contain",
  },
});

function SocialLink({ url, nameOfSocial, socialLogo }) {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    }
  }, [url]);

  return (
    <View style={styles.container}>
      {/* <Button title={nameOfSocial} onPress={handlePress} style={styles.socialLink}/> */}
      <Pressable onPress={handlePress} style={styles.socialLink}>
        <img src={socialLogo} style={styles.socialLogo} />
        <Text style={styles.text}>{nameOfSocial}</Text>
      </Pressable>
    </View>
  );
}

export default SocialLink;
