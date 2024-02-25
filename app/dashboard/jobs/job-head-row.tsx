export default function JobHeadRow({employmentType}: { employmentType: string }) {
    return (
        <tr className="flex space-x-3 p-4 bg-gray-200">
            <td>
                <div className="font-bold">職種</div>
            </td>
            <td>
                <div>{employmentType}</div>
            </td>
        </tr>
    );
};
