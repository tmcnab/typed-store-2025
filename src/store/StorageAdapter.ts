export default abstract class StorageAdapter
{
	abstract get (key: string) : Promise<any>
	abstract has (key: string) : Promise<boolean>
	abstract set (key: string, value: any) : Promise<any>
}