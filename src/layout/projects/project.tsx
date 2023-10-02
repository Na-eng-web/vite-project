import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { Children, useState } from "react";
import { SearchParamType, TrainsResultType, result } from "../../api/request";
import { SectionHeading } from "../../componant/sectionHeading";

const stations = ["Parbhani", "Selu", "Partur", "Jalana", "Aurangabad"];

export const Projects = () => {
  const [TrainsData, SetTrainsData] = useState<TrainsResultType[]>();
  const [SearchParam, SetSearchParam] = useState<SearchParamType>(
    {} as SearchParamType
  );

  const requestData = async () => {
    const data = await result(SearchParam);
    SetTrainsData(data);
  };

  return (
    <div>
      <SectionHeading
        heading="Projects"
        subHeading="Projects that I have created"
      />
      {/* <div className={style.project_container}>
        {Children.toArray(
          projects.map((project) => (
            <ProjectCard heading={project.heading} image={project.image} />
          ))
        )}
      </div> */}
      <Box
        m={2}
        gap={1}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Box gap={1} display={"flex"} justifyContent={"space-between"}>
          <Select
            placeholder="Select"
            sx={{ minWidth: 150 }}
            value={SearchParam.From}
            onChange={(e) =>
              SetSearchParam({ ...SearchParam, From: e.target.value })
            }
          >
            {Children.toArray(
              stations.map((station) => (
                <MenuItem key={station} dense value={station}>
                  {station}
                </MenuItem>
              ))
            )}
          </Select>
          <Select
            sx={{ minWidth: 150 }}
            value={SearchParam.To}
            onChange={(e) =>
              SetSearchParam({ ...SearchParam, To: e.target.value })
            }
          >
            {Children.toArray(
              stations.map((station) => (
                <MenuItem key={station} dense value={station}>
                  {station}
                </MenuItem>
              ))
            )}
          </Select>

          {TrainsData != undefined && TrainsData[0] && (
            <Select
              sx={{ minWidth: 150 }}
              value={SearchParam.Sort}
              onChange={(e) =>
                SetSearchParam({ ...SearchParam, Sort: e.target.value })
              }
            >
              {Children.toArray(
                Object.keys(TrainsData[0]).map((station) => (
                  <MenuItem key={station} dense value={station}>
                    {station}
                  </MenuItem>
                ))
              )}
            </Select>
          )}
        </Box>
        <Button onClick={requestData} variant="contained">
          Fetch
        </Button>
      </Box>
      {TrainsData && TrainsData[0]
        ? TrainsData.map((train) => (
            <Box key={train.name}>
              <Paper elevation={3} sx={{ borderRadius: 2, p: 2, m: 1 }}>
                <Typography variant="h6">Train Name: {train?.name}</Typography>
                <Typography>Route: {train?.route.join(" -> ")}</Typography>
                <Typography>Time: {train?.time}</Typography>
                <Typography>Distance: {train?.distance} km</Typography>
                <Typography>Price: ${train?.price}</Typography>
                {/* You can add more details here */}
              </Paper>
            </Box>
          ))
        : TrainsData && "NO DATA FOUND"}
    </div>
  );
};
