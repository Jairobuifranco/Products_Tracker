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


interface Product{
    id:number,
    name:string,
    price:number,
    descriptio:number,
}

interface Props{
    product:Product
}

export default function Edit({product} : Props) {

    const { data, setData, put, processing, errors } = useForm({
        name: product.name,
        price: product.price,
        description: product.descriptio,
    })

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('products.update', product.id))
    }

    return (
        <AppLayout breadcrumbs={[{title: 'Edit a Product', href: `/products/${product.id}/edit`}]}>
            <Head title="Update a Product" />
            <div className='w-8/12 p-4'>
                <form onSubmit={handleUpdate} className='space-y-4'>
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
                    <Button disabled={processing} type='submit'>Update Product</Button>
                </form>
            </div>
        </AppLayout>
    );
}
