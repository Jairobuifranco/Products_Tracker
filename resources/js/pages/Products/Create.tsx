import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from "@/components/ui/button";
import { Key, Route } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { TriangleAlert } from 'lucide-react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a New Product',
        href: '/products/create',
    },
];

export default function Index() {

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        price: '',
        description: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(data);
        post(route('products.store'))
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a New Product" />
            <div className='w-8/12 p-4'>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    {/*Display error */}

                    {Object.keys(errors).length > 0 && (
                        <Alert>
                            <TriangleAlert />
                            <AlertTitle>Errors!</AlertTitle>
                            <AlertDescription>
                                <ul>
                                    {Object.entries(errors).map(([key, message])=>(
                                        <li key={key}>{message as string}</li>
                                    ))}
                                </ul>
                            </AlertDescription>
                        </Alert>
                    )}
                    <div className='gap-1-5'>
                        <label htmlFor='product name'>Name</label>
                        <Input placeholder='Product Name' value={data.name} onChange={(e) => setData('name', e.target.value)}></Input>
                    </div>
                    <div className='gap-1-5'>
                        <label htmlFor='product price' >Price</label>
                        <Input placeholder='Price' value={data.price} onChange={(e) => setData('price', e.target.value)}></Input>
                    </div>
                    <div className='gap-1-5'>
                        <label htmlFor='product description'>Description</label>
                        <Textarea placeholder='Description' value={data.description} onChange={(e) => setData('description', e.target.value)} />
                    </div>
                    <Button disabled={processing} type='submit'>Add Product</Button>
                </form>
            </div>
        </AppLayout>
    );
}
