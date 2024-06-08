import React from "react";
import aws from "../assets/aws.png";
import hadoop from "../assets/hadoop.png";
import databricks from "../assets/databricks.png";
import snowflake from "../assets/snowflake.svg";
import spark from "../assets/spark.png";
import sql from "../assets/sql.png";
import sqoop from "../assets/sqoop.svg";
import mysql from "../assets/mysql.png";
import blaze from "../assets/blaze.png";
import hive from "../assets/hive.png";
import excel from "../assets/excel.png";
import kafka from "../assets/kafka.png";
import apache from "../assets/apache.png";
import azure from "../assets/azure.png";
const Tech = () => {
  const tech = [
    aws,
    hadoop,
    databricks,
    snowflake,
    spark,
    sql,
    sqoop,
    mysql,
    blaze,
    hive,
    kafka,
    excel,
    apache,
    azure,
  ];
  return (
    <div className="w-full my-10 flex flex-col justify-center items-center gap-8 py-24 bg-gradient-to-b from-[#122719] to-[#010a04]">
      <div className="text-white text-[2.2rem] font-bold">
        Learn to use these tools effectively
      </div>
      <div className=" grid grid-cols-5 gap-8 items-center justify-center">
        {tech.map((key, index) => {
          return (
            <div className="h-[56px] w-[150px] p-4    flex justify-center items-center">
              <img src={key} className="max-h-[70px] " alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;
