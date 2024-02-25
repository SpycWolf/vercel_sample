import {Metadata} from 'next';
import React from "react";
import {jobData} from "@/app/dashboard/jobs/job-data";
import JobCard from "@/app/dashboard/jobs/job-card";
import {lusitana} from "@/app/ui/fonts";

export const metadata: Metadata = {
    title: 'Jobs',
};

export default function JobPage() {
    return (
        <div className="w-full">
            <div className="flex w-full items-center pb-5">
                <h1 className="text-2xl">求人一覧</h1>
            </div>
            <div className="">
                {jobData.map((job, index) => (
                    <JobCard key={index} job={job}/>
                ))}
            </div>
        </div>
    );
}
