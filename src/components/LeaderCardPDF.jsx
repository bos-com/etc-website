import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

import etcLogo from "../assets/images/etc-logo 1.png";
import mgBadge from "../assets/images/mg-badge.png";
import sylBadge from "../assets/images/syl-badge.png";
import signature from "../assets/images/signature.png";
import JsBarcode from "jsbarcode";

const styles = StyleSheet.create({
  page: {
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },

  card: {
    width: 240,
    height: 150,
    border: "1 solid #cccccc",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },

  header: {
    backgroundColor: "#0e7490",
    color: "#ffffff",
    padding: 4,
    textAlign: "center",
  },

  logo: {
    width: 20,
    height: 20,
    alignSelf: "center",
    marginBottom: 2,
  },

  title: {
    fontSize: 8,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 5,
  },

body: {
  padding: 6,
  position: "relative",
},

  contentRow: {
    flexDirection: "row",
  },
leftColumn: {
  width: 50,
  alignItems: "center",
  marginRight: 5,
},

photo: {
  width: 42,
  height: 42,
  borderRadius: 3,
},

  badgeRow: {
    flexDirection: "row",
    marginTop: 4,
    gap: 3,
  },

 badge: {
   width: 14,
   height: 14,
 },

name: {
  fontSize: 7,
  fontWeight: "bold",
  marginBottom: 3,
},

text: {
  fontSize: 4.5,
  marginBottom: 1,
},

watermark: {
  position: "absolute",
  top: 68,
  left: 85,
  fontSize: 10,
  color: "#16a34a",
  opacity: 0.02,
  textAlign: "center",
},

signatureArea: {
  marginTop: 4,
  alignItems: "center",
},
  signatureText: {
    fontSize: 4,
  },
signatureImage: {
  width: 45,
  height: 15,
  marginBottom: 1,
},

  backBody: {
    padding: 10,
    alignItems: "center",
  },

  backText: {
    fontSize: 6,
    marginBottom: 3,
    textAlign: "center",
  },
qrCode: {
  width: 22,
  height: 22,
  marginTop: 2,
},
barcode: {
  width: 90,
  height: 22,
  marginTop: 8,
},
qrCode: {
  width: 18,
  height: 18,
  marginTop: 1,
},
});

export default function LeaderCardPDF({
  leader,
  startYear,
  endYear,
  qrCodeUrl,
  barcodeUrl,
}) {
  return (
    <Document>

      {/* FRONT CARD */}
      <Page size="A4" style={styles.page}>
        <View style={styles.card}>

          <View style={styles.header}>
            <Image src={etcLogo} style={styles.logo} />

            <Text style={styles.title}>
              EAST TANZANIA CONFERENCE
            </Text>

            <Text style={styles.subtitle}>
              MG / SYL Registration Card
            </Text>
          </View>

          <View style={styles.body}>

            <Text style={styles.watermark}>
              ETC OFFICIAL{"\n"}
              APPROVED
            </Text>

            <View style={styles.contentRow}>

              {/* LEFT */}
              <View style={styles.leftColumn}>

                <Image
                  src={leader.photo_url}
                  style={styles.photo}
                />

                <View style={styles.badgeRow}>

                  {(leader.registration_type === "MG" ||
                    leader.registration_type === "BOTH") && (
                    <Image
                      src={mgBadge}
                      style={styles.badge}
                    />
                  )}

                  {(leader.registration_type === "SYL" ||
                    leader.registration_type === "BOTH") && (
                    <Image
                      src={sylBadge}
                      style={styles.badge}
                    />
                  )}

                </View>

              </View>

              {/* RIGHT */}
              <View
                style={{
                  flex: 1,
                  marginLeft: 4,
                }}
              >

                <Text style={styles.name}>
                  {leader.full_name}
                </Text>

                <Text style={styles.text}>
                  Registration No: {leader.registration_number}
                </Text>

                <Text style={styles.text}>
                  Card ID: ETC-CARD-{leader.id}
                </Text>

                <Text style={styles.text}>
                  Type: {leader.registration_type}
                </Text>

                <Text style={styles.text}>
                  Church District: {leader.church_district}
                </Text>

                <Text style={styles.text}>
                  Pastor: {leader.district_pastor}
                </Text>

                <Text style={styles.text}>
                  Valid: {startYear} - {endYear}
                </Text>

                <Text style={styles.text}>
                  Status: {leader.approval_status}
                </Text>

              </View>

            </View>

           <View style={styles.signatureArea}>

             <Image
               src={signature}
               style={styles.signatureImage}
             />

             <Text style={styles.signatureText}>
               ETC Youth Director
             </Text>

             <Image
               src={qrCodeUrl}
               style={styles.qrCode}
             />

           </View>

           </View>   {/* body */}

           </View>   {/* card */}

           </Page>

      {/* BACK CARD */}
      <Page size="A4" style={styles.page}>

        <View style={styles.card}>

          <View style={styles.header}>
            <Text style={styles.title}>
              EAST TANZANIA CONFERENCE
            </Text>

            <Text style={styles.subtitle}>
              MG / SYL Leader Card
            </Text>
          </View>

          <View style={styles.backBody}>

            <Text style={styles.backText}>
              If found kindly return to:
            </Text>

            <Text style={styles.backText}>
              East Tanzania Conference
            </Text>

            <Text style={styles.backText}>
              Seventh-day Adventist Church
            </Text>

            <Text style={styles.backText}>
              Morogoro, Tanzania
            </Text>

            <Text style={styles.backText}>
              Email: info@etc.or.tz
            </Text>

            <Text style={styles.backText}>
              Phone: +255 677 048 083
            </Text>

            <Text style={styles.backText}>
              Card ID: ETC-CARD-{leader.id}
            </Text>

            <Text style={styles.backText}>
              Validity: {startYear} - {endYear}
            </Text>
            <Text
              style={{
                fontSize: 4,
                marginTop: 4,
                color: "#777777",
                textAlign: "center",
              }}
            >
              Property of East Tanzania Conference
            </Text>
           <Image
             src={barcodeUrl}
             style={styles.barcode}
           />

          </View>

        </View>

      </Page>

    </Document>
  );
}