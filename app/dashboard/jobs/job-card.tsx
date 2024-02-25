import {JobType} from "@/app/dashboard/jobs/job-type";
import JobHeadRow from "@/app/dashboard/jobs/job-head-row";
import JobDataRow from "@/app/dashboard/jobs/job-data-row";
import JobDetailRow from "@/app/dashboard/jobs/job-detail-row";
import React from "react";

export default function JobCard({job}: {
    job: JobType;
}) {
    return (
        <table className="border border-collapse mb-10 w-[50%]">
            <tbody>
            <JobHeadRow employmentType={job.occupation}/>
            <JobDataRow date={job.date} deadline={job.deadline}/>
            <JobDetailRow title="求人区分" value={job.employmentType}/>
            <JobDetailRow title="事業所名" value={job.company}/>
            <JobDetailRow title="就業場所" value={job.location}/>
            <JobDetailRow title="仕事の内容" value={job.summary}/>
            <JobDetailRow title="雇用形態" value={job.contractType}/>
            <JobDetailRow title="賃金\n（手当を含む）" value={job.salary}/>
            <JobDetailRow title="就業時間" value={job.workingHours}/>
            <JobDetailRow title="休日" value={job.holidays}/>
            <JobDetailRow title="年齢" value={job.age}/>
            <JobDetailRow title="求人番号" value={job.jobNumber}/>
            <JobDetailRow title="公開範囲" value={job.publicRange}/>
            </tbody>
        </table>
    );
}
