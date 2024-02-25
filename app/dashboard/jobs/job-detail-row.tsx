export default function JobDetailRow({title, value}: {
    title: string;
    value: string;
}) {
    return (
        <tr className="flex space-x-3 p-2 bg-white border-t">
            <td className="w-40">
                <div className="font-bold">
                    {title}
                </div>
            </td>
            <td>
                <div>
                    {value}
                </div>
            </td>
        </tr>
    );
}
