import { formDate } from "../../utils/formDate";

const Appointments = ({ appointments }) => {
  console.log('yes'); // Log appointments to inspect data structure

  return (
    <table className='w-full text-left text-sm text-gray-500'>
      <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
        <tr>
          <th scope='col' className='px-6 py-3'>
            Name
          </th>
          <th scope='col' className='px-6 py-3'>
            Gender
          </th>
          <th scope='col' className='px-6 py-3'>
            Payment
          </th>
          <th scope='col' className='px-6 py-3'>
            Price
          </th>
          <th scope='col' className='px-6 py-3'>
            Booked on
          </th>
        </tr>
      </thead>
      <tbody>
        {appointments?.map(item => {
          // Ensure item and item.user exist before accessing their properties
          if (!item || !item.user) {
            return null; // Skip rendering if item or item.user is null
          }

          console.log('Item:', item); // Log each item to inspect its structure

          return (
            <tr key={item._id}>
              <th scope='row' className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap'>
                {item.user.photo && (
                  <img src={item.user.photo} className='w-10 h-10 rounded-full' alt="" />
                )}
                <div className='pl-3'>
                  <div className='text-base font-semibold'>{item.user.name}</div>
                  <div className='text-normal text-gray-500'>{item.user.email}</div>
                </div>
              </th>
              <td className='px-6 py-4'>{item.user.gender}</td>
              <td className='px-6 py-4'>
                {item.isPaid ? (
                  <div className='flex items-center'>
                    <div className='h-2.5 w-2.5 rounded-full bg-green-500 mr-2'></div>
                    Paid
                  </div>
                ) : (
                  <div className='flex items-center'>
                    <div className='h-2.5 w-2.5 rounded-full bg-red-500 mr-2'></div>
                    Unpaid
                  </div>
                )}
              </td>
              <td className='px-6 py-4'>{item.ticketPrice}</td>
              <td className='px-6 py-4'>{formDate(item.createdAt)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Appointments;
