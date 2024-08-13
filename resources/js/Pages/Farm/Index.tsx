import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {PageProps, User, Farm, Animal} from '@/types';
import PrimaryButton from "@/Components/PrimaryButton";

export default function Index({ auth, farms}: PageProps) {
    const { data, links } = farms;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Farms</h2>}
        >
            <Head title="Farms" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="m-8 flex justify-between text-gray-900 text-xl font-bold">
                            <h1>Your farms</h1>
                            <a href={route('farms.create')}>
                                <PrimaryButton>Add Farm</PrimaryButton>
                            </a>
                        </div>
                        <div className="m-5">
                            {farms.data.length > 0 ? (
                                <>
                                    <ul>
                                        {farms.data.map((farm) => (
                                            <li key={farm.id} className="py-2 mb-2 border border-gray-200 rounded-lg">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <div className="text-xl font-bold ml-2">{farm.name}</div>
                                                        <div className="ml-2">Email: {farm.email}</div>
                                                        <div className="ml-2">Website: {farm.website}</div>
                                                    </div>
                                                    <div className='mr-5'>
                                                        <a href={route('animals.create', { farm_id: farm.id })}>
                                                            <PrimaryButton>Add Animal</PrimaryButton>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div>
                                                    {farm.animals.length > 0 ? (
                                                        <div className="block w-full overflow-x-auto">
                                                            <table className="items-center text-center bg-transparent w-full border-collapse ">
                                                                <thead>
                                                                <tr>
                                                                    <th className="text-center px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                                                                    Animal ID
                                                                </th>
                                                                <th className="text-center px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                                    Type
                                                                </th>
                                                                <th className="text-center px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                                    Years
                                                                </th>
                                                            </tr>
                                                            </thead>
                                                            <tbody className="text-center">
                                                                {farm.animals.map((animal: Animal) => (
                                                                    <tr key={animal.id}>
                                                                        <td className="px-6 py-1 align-middle">{animal.animal_number}</td>
                                                                        <td className="px-6 py-1 align-middle">{animal.type_name}</td>
                                                                        <td className="px-6 py-1 align-middle">{animal.years}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    ) : (
                                                        <p className='ml-2'>No Animals in the farm.</p>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex mt-4 justify-between">
                                        {farms.links.map((link) => (
                                            <a
                                                key={link.label.replaceAll('&laquo;', '').replaceAll('&raquo;', '')}
                                                href={link.url}
                                                className={`px-4 py-2 border rounded ${
                                                    link.active ? 'bg-gray-800 text-white' : 'text-gray-900'
                                                }`}
                                            >
                                                {link.label.replaceAll('&laquo;', '').replaceAll('&raquo;', '')}
                                            </a>
                                        ))}
                                    </div>
                                </>
                            ) : (
                            <p>No farms available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
);
}
