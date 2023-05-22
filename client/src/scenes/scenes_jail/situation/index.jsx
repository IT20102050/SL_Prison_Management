import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "components/com_jail/Header";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Situation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "http://localhost:5001/client/jailings"
        );

        // combine data from both API calls
        const combinedData = [
          {
            id: "Situation",
            data: result.data.map((item) => ({
              x: item.category,
              y: item._id,
            })),
          },
        ];

        setData(combinedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const theme = useTheme();

  const downloadStatusReport = async () => {
    try {
      const canvas = await html2canvas(document.querySelector("#root"), {
        scrollX: window.scrollX,
        scrollY: window.scrollY,
        windowWidth: window.innerWidth,
        windowHeight: document.body.scrollHeight,
      });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("status_report.pdf");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Status" />
      <Box>
        <Button
          sx={{
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.background.alt,
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
          onClick={downloadStatusReport}
        >
          <DownloadOutlined sx={{ mr: "10px" }} />
          Download Report
        </Button>
      </Box>
      <br />
      <Card>
        <CardContent>
          <Typography variant="h6" align="center">
            Jail Category Chart
          </Typography>
          <div style={{ height: "500px" }}>
            <ResponsiveLine
              data={data}
              theme={{
                background: "#fff",
              }}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
              }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              enableGridX={false}
              enableGridY={false}
              lineWidth={2}
              colors={{ scheme: "category10" }}
              pointSize={6}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: "circle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  onClick: (data, index) => {
                    console.log("legend clicked", data, index);
                  },
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Situation;
