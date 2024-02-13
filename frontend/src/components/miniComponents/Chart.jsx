import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

const Chart = () => {
  const [myBlogs, setMyBlogs] = useState([]);
  useEffect(() => {
    const fetchMyBlogs = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/blog/myblogs",
        { withCredentials: true }
      );
      setMyBlogs(data.blogs);
    };
    fetchMyBlogs();
  }, []);

  const publishedBlogs =
    myBlogs && myBlogs.filter((blog) => blog.published === true);
  const notPublishedBlogs =
    myBlogs && myBlogs.filter((blog) => blog.published === false);

  console.log(publishedBlogs);

  const data = {
    labels: ["Published", "Not Published"],
    datasets: [
      {
        label: "Blogs",
        data: [
          publishedBlogs.length > 0 ? publishedBlogs.length : 0,
          notPublishedBlogs.length > 0 ? notPublishedBlogs.length : 0,
        ],
        borderColor: ["#0e7490", "#facc15"],
        backgroundColor: ["#0e7490", "#facc15"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <section className="chart-container" style={{ height: "90vh" }}>
      <h3>BLOG ANALYTICS</h3>
      <Doughnut data={data} style={{ height: "550px" }} />
    </section>
  );
};

export default Chart;
