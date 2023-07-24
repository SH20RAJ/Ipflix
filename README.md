# IP Details Lookup

IP Details Lookup is a simple Node.js website that provides details about an IP address, including geographic information, ISP, and IP types (IPv6 and IPv4). This repository contains the server-side code for the website.

## Description

Our website offers a user-friendly interface to look up detailed information about any IP address. It also provides an API that allows developers to programmatically retrieve IP address details for their applications.

- Website: [https://ipflix.vercel.app/](https://ipflix.vercel.app/)
- GitHub Repository: [https://github.com/SH20RAJ/Ipflix](https://github.com/SH20RAJ/Ipflix)

## Getting Started

To run the IP Details Lookup website locally, you need to have Node.js and npm installed on your machine.

1. Clone the repository:

```bash
git clone https://github.com/SH20RAJ/Ipflix.git
cd Ipflix
```

2. Install the dependencies:

```bash
npm install
```

3. Start the server:

```bash
node index.js
```

The website will be accessible at http://localhost:3000.

## API Documentation

The IP Details Lookup API provides details about the IP address related to the incoming request.

### Endpoint

```
GET /api/ipdetails
```

### Parameters

- `ip` (optional): The specific IP address to get details for. If not provided, it will return details for the current user's IP address.

### Response Format

The API response will be in JSON format and will include the following fields:

- `timestamp`: The timestamp when the API request was made.
- `ip`: The IP address for which details are retrieved.
- `city`: The city associated with the IP address.
- `region`: The region (state/province) associated with the IP address.
- `country`: The country associated with the IP address.
- `loc`: The latitude and longitude of the IP address location.
- `isp`: The Internet Service Provider associated with the IP address.
- `timezone`: The timezone of the IP address location.
- `ipv6`: The IPv6 address (if applicable).
- `ipv4`: The IPv4 address (if applicable).
- `fromYourSide`: An additional detail added by the server.

## Current User Details

The "Current User Details" section on the website's homepage displays the user's current IP address and ISP details. These details are automatically fetched from the API when the page loads.

## Deployment

You can deploy the IP Details Lookup website using Vercel. Click on the button below to deploy it instantly:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/SH20RAJ/Ipflix)

Once deployed, you will get a public URL for your live website.

## Contribution

Contributions to improve the project are welcome! If you find any issues or have any suggestions, please feel free to create a pull request or open an issue.

## License

This project is licensed under the [MIT License](LICENSE).